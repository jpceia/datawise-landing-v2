import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const GlobeComponent = () => {
  const containerRef = useRef(null);
  const canvas3DRef = useRef(null);
  const canvas2DRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvas3DRef.current || !canvas2DRef.current || !popupRef.current) return;

    // Importações dinâmicas para evitar problemas de SSR
    const importModules = async () => {
      const THREE = await import('three');
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls');
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      // Referências aos elementos DOM
      const containerEl = containerRef.current;
      const canvas3D = canvas3DRef.current;
      const canvas2D = canvas2DRef.current;
      const popupEl = popupRef.current;

      let renderer, scene, camera, rayCaster, controls, group;
      let overlayCtx = canvas2D.getContext('2d');
      let coordinates2D = [0, 0];
      let pointerPos;
      let clock, mouse, pointer, globe, globeMesh;
      let popupVisible;
      let earthTexture, mapMaterial;
      let popupOpenTl, popupCloseTl;

      let dragged = false;

      initScene();
      window.addEventListener('resize', updateSize);

      // CORRIGIDO: Shaders com as declarações de uniformes no início
      const vertexShaderMap = `
        uniform sampler2D u_map_tex;
        uniform float u_dot_size;
        uniform float u_time_since_click;
        uniform vec3 u_pointer;
        
        attribute vec3 position;
        attribute vec2 uv;
        
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        
        #define PI 3.14159265359
        
        varying float vOpacity;
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            // mask with world map
            float visibility = step(.2, texture2D(u_map_tex, uv).r);
            gl_PointSize = visibility * u_dot_size;
            // make back dots semi-transparent
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vOpacity = (1. / length(mvPosition.xyz) - .7);
            vOpacity = clamp(vOpacity, .03, 1.);
            // add ripple
            float t = u_time_since_click - .1;
            t = max(0., t);
            float max_amp = .15;
            float dist = 1. - .5 * length(position - u_pointer); // 0 .. 1
            float damping = 1. / (1. + 20. * t); // 1 .. 0
            float delta = max_amp * damping * sin(5. * t * (1. + 2. * dist) - PI);
            delta *= 1. - smoothstep(.8, 1., dist);
            vec3 pos = position;
            pos *= (1. + delta);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
        }
      `;

      const fragmentShaderMap = `
        uniform sampler2D u_map_tex;
        
        varying float vOpacity;
        varying vec2 vUv;
        
        void main() {
          // Calcular a distância do centro do ponto
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          float r = dot(cxy, cxy);
          float delta = fwidth(r);
          float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
          
          // Definir a cor do mapa
          vec4 map_color = texture2D(u_map_tex, vUv);
          map_color.a *= vOpacity;
          
          // Saída final
          gl_FragColor = vec4(map_color.rgb, mask * map_color.a);
        }
      `;

      function initScene() {
        renderer = new THREE.WebGLRenderer({
          canvas: canvas3D,
          alpha: true,
        });
        renderer.setPixelRatio(2);

        scene = new THREE.Scene();
        camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
        camera.position.z = 1.1;

        rayCaster = new THREE.Raycaster();
        rayCaster.far = 1.15;
        mouse = new THREE.Vector2(-1, -1);
        clock = new THREE.Clock();

        createOrbitControls();

        popupVisible = false;

        // Usar a textura local do diretório public
        new THREE.TextureLoader().load(
          '/earth-map-colored.png',
          mapTex => {
            console.log("Textura carregada com sucesso"); // Log para debug
            earthTexture = mapTex;
            earthTexture.repeat.set(1, 1);
            createGlobe();
            createPointer();
            createPopupTimelines();
            addCanvasEvents();
            updateSize();
            render();
          },
          undefined, // onProgress callback
          error => console.error("Erro ao carregar a textura:", error) // onError callback
        );
      }

      function createOrbitControls() {
        controls = new OrbitControls(camera, canvas3D);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.minPolarAngle = 0.4 * Math.PI;
        controls.maxPolarAngle = 0.4 * Math.PI;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5; // Velocidade de rotação reduzida para um efeito mais suave

        let timestamp;
        controls.addEventListener('start', () => {
          timestamp = Date.now();
        });
        controls.addEventListener('end', () => {
          dragged = Date.now() - timestamp > 600;
        });
      }

      function createGlobe() {
        // Geometria mais detalhada para o globo
        const globeGeometry = new THREE.IcosahedronGeometry(1, 22);
        
        console.log("Criando material com textura:", earthTexture); // Log para debug
        
        mapMaterial = new THREE.ShaderMaterial({
          vertexShader: vertexShaderMap,
          fragmentShader: fragmentShaderMap,
          uniforms: {
            u_map_tex: { type: 't', value: earthTexture },
            u_dot_size: { type: 'f', value: 0 },
            u_pointer: {
              type: 'v3',
              value: new THREE.Vector3(0.0, 0.0, 1),
            },
            u_time_since_click: { value: 0 },
          },
          alphaTest: false,
          transparent: true,
        });

        globe = new THREE.Points(globeGeometry, mapMaterial);
        scene.add(globe);

        globeMesh = new THREE.Mesh(
          globeGeometry,
          new THREE.MeshBasicMaterial({
            color: 0xf5f5f5, // Cor mais clara para corresponder à imagem
            transparent: true,
            opacity: 0.05,
          })
        );
        scene.add(globeMesh);
      }

      function createPointer() {
        const geometry = new THREE.SphereGeometry(0.03, 16, 16);
        const material = new THREE.MeshBasicMaterial({
          color: 0x000000, // Cor preta para o ponto
          transparent: true,
          opacity: 0,
        });
        pointer = new THREE.Mesh(geometry, material);
        scene.add(pointer);
      }

      function updateOverlayGraphic() {
        let activePointPosition = pointer.position.clone();
        activePointPosition.applyMatrix4(globe.matrixWorld);
        const activePointPositionProjected = activePointPosition.clone();
        activePointPositionProjected.project(camera);
        coordinates2D[0] =
          (activePointPositionProjected.x + 1) *
          containerEl.offsetWidth *
          0.5;
        coordinates2D[1] =
          (1 - activePointPositionProjected.y) *
          containerEl.offsetHeight *
          0.5;

        const matrixWorldInverse = controls.object.matrixWorldInverse;
        activePointPosition.applyMatrix4(matrixWorldInverse);

        if (activePointPosition.z > -1) {
          if (popupVisible === false) {
            popupVisible = true;
            showPopupAnimation(false);
          }

          let popupX = coordinates2D[0];
          popupX -=
            activePointPositionProjected.x * containerEl.offsetWidth * 0.3;

          let popupY = coordinates2D[1];
          const upDown = activePointPositionProjected.y > 0.6;
          popupY += upDown ? 20 : -20;

          gsap.set(popupEl, {
            x: popupX,
            y: popupY,
            xPercent: -35,
            yPercent: upDown ? 0 : -100,
          });

          popupY += upDown ? -5 : 5;
          const curveMidX = popupX + activePointPositionProjected.x * 100;
          const curveMidY =
            popupY + (upDown ? -0.5 : 0.1) * coordinates2D[1];

          drawPopupConnector(
            coordinates2D[0],
            coordinates2D[1],
            curveMidX,
            curveMidY,
            popupX,
            popupY
          );
        } else {
          if (popupVisible) {
            popupOpenTl.pause(0);
            popupCloseTl.play(0);
          }
          popupVisible = false;
        }
      }

      function addCanvasEvents() {
        containerEl.addEventListener('mousemove', e => {
          updateMousePosition(e.clientX, e.clientY);
        });

        function updateMousePosition(eX, eY) {
          const rect = containerEl.getBoundingClientRect();
          mouse.x =
            ((eX - rect.left) / containerEl.offsetWidth) * 2 - 1;
          mouse.y =
            -((eY - rect.top) / containerEl.offsetHeight) * 2 + 1;
        }
      }

      function checkIntersects() {
        rayCaster.setFromCamera(mouse, camera);
        const intersects = rayCaster.intersectObject(globeMesh);
        if (intersects.length) {
          document.body.style.cursor = 'pointer';
          if (!pointer.position.equals(intersects[0].point)) {
            pointer.position.copy(intersects[0].point);
          }
        } else {
          document.body.style.cursor = 'auto';
        }
        return intersects;
      }

      function render() {
        mapMaterial.uniforms.u_time_since_click.value = clock.getElapsedTime();
        checkIntersects();
        if (pointer) {
          updateOverlayGraphic();
        }
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      }

      function updateSize() {
        // Definir um tamanho maior para o globo
        const minSide = Math.min(window.innerWidth, window.innerHeight);
        const globeSize = Math.max(minSide * 0.9, 600); // Assegurar que o globo seja grande
        
        containerEl.style.width = globeSize + 'px';
        containerEl.style.height = globeSize + 'px';
        renderer.setSize(globeSize, globeSize);
        canvas2D.width = canvas2D.height = globeSize;
        mapMaterial.uniforms.u_dot_size.value = 0.04 * globeSize;
      }

      // HELPERS

      // popup content
      function cartesianToLatLong() {
        const pos = pointer.position;
        const lat = 90 - (Math.acos(pos.y) * 180) / Math.PI;
        const lng =
          ((270 + (Math.atan2(pos.x, pos.z) * 180) / Math.PI) % 360) - 180;
        return (
          formatCoordinate(lat, 'N', 'S') +
          ',&nbsp;' +
          formatCoordinate(lng, 'E', 'W')
        );
      }

      function formatCoordinate(coordinate, positiveDirection, negativeDirection) {
        const direction = coordinate >= 0 ? positiveDirection : negativeDirection;
        return `${Math.abs(coordinate).toFixed(4)}°&nbsp${direction}`;
      }

      // popup show / hide logic
      function createPopupTimelines() {
        popupOpenTl = gsap
          .timeline({
            paused: true,
          })
          .to(
            pointer.material,
            {
              duration: 0.2,
              opacity: 1,
            },
            0
          )
          .fromTo(
            canvas2D,
            {
              opacity: 0,
            },
            {
              duration: 0.3,
              opacity: 1,
            },
            0.15
          )
          .fromTo(
            popupEl,
            {
              opacity: 0,
              scale: 0.9,
              transformOrigin: 'center bottom',
            },
            {
              duration: 0.1,
              opacity: 1,
              scale: 1,
            },
            0.15 + 0.1
          );

        popupCloseTl = gsap
          .timeline({
            paused: true,
          })
          .to(
            pointer.material,
            {
              duration: 0.3,
              opacity: 0.2,
            },
            0
          )
          .to(
            canvas2D,
            {
              duration: 0.3,
              opacity: 0,
            },
            0
          )
          .to(
            popupEl,
            {
              duration: 0.3,
              opacity: 0,
              scale: 0.9,
              transformOrigin: 'center bottom',
            },
            0
          );
      }

      function showPopupAnimation(lifted) {
        if (lifted) {
          let positionLifted = pointer.position.clone();
          positionLifted.multiplyScalar(1.3);
          gsap.from(pointer.position, {
            duration: 0.25,
            x: positionLifted.x,
            y: positionLifted.y,
            z: positionLifted.z,
            ease: 'power3.out',
          });
        }
        popupCloseTl.pause(0);
        popupOpenTl.play(0);
      }

      // overlay (line between pointer and popup)
      function drawPopupConnector(startX, startY, midX, midY, endX, endY) {
        overlayCtx.strokeStyle = '#000000';
        overlayCtx.lineWidth = 2; // Linha mais fina
        overlayCtx.lineCap = 'round';
        overlayCtx.clearRect(0, 0, containerEl.offsetWidth, containerEl.offsetHeight);
        overlayCtx.beginPath();
        overlayCtx.moveTo(startX, startY);
        overlayCtx.quadraticCurveTo(midX, midY, endX, endY);
        overlayCtx.stroke();
      }

      // Cleanup
      return () => {
        window.removeEventListener('resize', updateSize);
        if (containerEl) {
          containerEl.removeEventListener('mousemove', addCanvasEvents);
        }
        controls.dispose();
        if (renderer) {
          renderer.dispose();
        }
      };
    };

    importModules().catch(error => console.error("Erro ao importar módulos:", error));
  }, []);

  return (
    <div ref={containerRef} className="globe-wrapper relative">
      <canvas ref={canvas3DRef} id="globe-3d" className="absolute top-0 left-0 w-full h-full"></canvas>
      <canvas ref={canvas2DRef} id="globe-2d-overlay" className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
      <div ref={popupRef} className="globe-popup">
        <div className="text-sm">
          <div className="font-medium">Localização</div>
        </div>
      </div>
    </div>
  );
};

// Principal Hero Component
const Hero = () => {
  return (
    <div className="relative bg-white pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              SOLUÇÕES INTELIGENTES DE DADOS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Potencie os dados da sua empresa
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Somos especialistas em inteligência artificial para ajudar empresas a automatizar processos e a tomar melhores decisões.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                Agende uma reunião
              </a>
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-900 rounded-md border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Saiba mais
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-full mx-auto overflow-hidden" style={{width: '800px', height: '800px', maxWidth: '100%'}}>
              <GlobeComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;