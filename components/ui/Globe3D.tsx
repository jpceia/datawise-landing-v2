import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface GlobeProps {
  rotationSpeed?: number;
  size?: number;
}

interface SceneProps {
  rotationSpeed: number;
  size: number;
}

const InteractiveGlobe = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const canvas2DRef = useRef(null);
  const popupRef = useRef(null);

  const [coordinates, setCoordinates] = useState('');

  useEffect(() => {
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.OrthographicCamera;
    let rayCaster: THREE.Raycaster;
    let controls: OrbitControls;
    let group: THREE.Group;
    let overlayCtx: CanvasRenderingContext2D | null;
    let mouse: THREE.Vector2;
    let pointer: THREE.Mesh;
    let globe: THREE.Points;
    let globeMesh: THREE.Mesh;
    let popupVisible = false;
    let earthTexture: THREE.Texture;
    let mapMaterial: THREE.ShaderMaterial;
    let popupOpenTl: gsap.core.Timeline;
    let popupCloseTl: gsap.core.Timeline;

    const initScene = () => {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        alpha: true,
      });
      renderer.setPixelRatio(2);

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
      camera.position.z = 1.1;

      rayCaster = new THREE.Raycaster();
      rayCaster.far = 1.15;
      mouse = new THREE.Vector2(-1, -1);

      createOrbitControls();

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        'https://ksenia-k.com/img/earth-map-colored.png',
        (mapTex) => {
          earthTexture = mapTex;
          earthTexture.repeat.set(1, 1);
          createGlobe();
          createPointer();
          addCanvasEvents();
          updateSize();
          render();
        }
      );
    };

    const createOrbitControls = () => {
      controls = new OrbitControls(camera, canvasRef.current);
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.minPolarAngle = 0.4 * Math.PI;
      controls.maxPolarAngle = 0.4 * Math.PI;
      controls.autoRotate = true;
    };

    const createGlobe = () => {
      const vertexShader = `
        uniform sampler2D u_map_tex;
        uniform float u_dot_size;
        uniform float u_time_since_click;
        uniform vec3 u_pointer;

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

      const fragmentShader = `
        uniform sampler2D u_map_tex;

        varying float vOpacity;
        varying vec2 vUv;

        void main() {
          vec3 color = texture2D(u_map_tex, vUv).rgb;
          color -= .2 * length(gl_PointCoord.xy - vec2(.5));
          float dot = 1. - smoothstep(.38, .4, length(gl_PointCoord.xy - vec2(.5)));
          if (dot < 0.5) discard;
          gl_FragColor = vec4(color, dot * vOpacity);
        }
      `;

      const globeGeometry = new THREE.IcosahedronGeometry(1, 22);
      mapMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_map_tex: { value: earthTexture },
          u_dot_size: { value: 0 },
          u_pointer: { value: new THREE.Vector3(0.0, 0.0, 1) },
          u_time_since_click: { value: 0 },
        },
        alphaTest: 0,
        transparent: true,
      });

      globe = new THREE.Points(globeGeometry, mapMaterial);
      scene.add(globe);

      globeMesh = new THREE.Mesh(
        globeGeometry,
        new THREE.MeshBasicMaterial({
          color: 0x222222,
          transparent: true,
          opacity: 0.05,
        })
      );
      scene.add(globeMesh);
    };

    const createPointer = () => {
      const geometry = new THREE.SphereGeometry(0.04, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0,
      });
      pointer = new THREE.Mesh(geometry, material);
      scene.add(pointer);
    };

    const updateOverlayGraphic = () => {
      if (!pointer) return;

      let activePointPosition = pointer.position.clone();
      activePointPosition.applyMatrix4(globe.matrixWorld);
      const activePointPositionProjected = activePointPosition.clone();
      activePointPositionProjected.project(camera);

      if (!containerRef.current) return;

      const matrixWorldInverse = (controls.object as any).matrixWorldInverse;
      activePointPosition.applyMatrix4(matrixWorldInverse);

      if (activePointPosition.z > -1) {
        const lat = 90 - (Math.acos(pointer.position.y) * 180) / Math.PI;
        const lng = ((270 + (Math.atan2(pointer.position.x, pointer.position.z) * 180) / Math.PI) % 360) - 180;
        
        setCoordinates(
          `${Math.abs(lat).toFixed(4)}°${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(4)}°${lng >= 0 ? 'E' : 'W'}`
        );
      }
    };

    const addCanvasEvents = () => {
      if (!containerRef.current) return;
      const containerEl = containerRef.current as HTMLDivElement;
      containerEl.addEventListener('mousemove', (e: MouseEvent) => {
        mouse.x = ((e.clientX - containerEl.offsetLeft) / containerEl.offsetWidth) * 2 - 1;
        mouse.y = -((e.clientY - containerEl.offsetTop) / containerEl.offsetHeight) * 2 + 1;
      });
    };

    const checkIntersects = () => {
      rayCaster.setFromCamera(mouse, camera);
      const intersects = rayCaster.intersectObject(globeMesh);
      document.body.style.cursor = intersects.length ? 'pointer' : 'auto';
      return intersects;
    };

    const render = () => {
      if (!mapMaterial) return;

      mapMaterial.uniforms.u_time_since_click.value = performance.now() / 1000;
      checkIntersects();
      if (pointer) {
        updateOverlayGraphic();
      }
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    const updateSize = () => {
      if (!containerRef.current || !canvas2DRef.current) return;
      const containerEl = containerRef.current as HTMLDivElement;
      const minSide = 0.65 * Math.min(window.innerWidth, window.innerHeight);
      containerEl.style.width = `${minSide}px`;
      containerEl.style.height = `${minSide}px`;
      renderer.setSize(minSide, minSide);
      (canvas2DRef.current as HTMLCanvasElement).width = (canvas2DRef.current as HTMLCanvasElement).height = minSide;
      if (mapMaterial) {
        mapMaterial.uniforms.u_dot_size.value = 0.04 * minSide;
      }
    };

    window.addEventListener('resize', updateSize);
    initScene();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (renderer) {
        renderer.dispose();
      }
      if (earthTexture) {
        earthTexture.dispose();
      }
      if (globe) {
        globe.geometry.dispose();
        (globe.material as THREE.Material).dispose();
      }
      if (globeMesh) {
        globeMesh.geometry.dispose();
        (globeMesh.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="globe-wrapper relative w-full h-full flex justify-center items-center"
    >
      <canvas 
        ref={canvasRef} 
        id="globe-3d" 
        className="absolute top-0 left-0 w-full h-full"
      />
      <canvas 
        ref={canvas2DRef} 
        id="globe-2d-overlay" 
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0"
      />
      <div 
        ref={popupRef} 
        className="globe-popup absolute top-0 left-0 bg-white text-gray-800 p-2 rounded-md text-sm shadow-md opacity-0"
      >
        {coordinates}
      </div>
    </div>
  );
};

export default InteractiveGlobe;