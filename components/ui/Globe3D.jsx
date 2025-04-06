import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Shader code
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
    // Diminuir a intensidade das cores para melhor visibilidade
    color *= 0.8;
    color -= .1 * length(gl_PointCoord.xy - vec2(.5));
    float dot = 1. - smoothstep(.38, .4, length(gl_PointCoord.xy - vec2(.5)));
    if (dot < 0.5) discard;
    gl_FragColor = vec4(color, dot * vOpacity);
  }
`;

const Globe3D = ({ scale = 1, position = [0, 0, 0], speed = 1, onPointerMove, onClick }) => {
  const globeRef = useRef();
  const pointerRef = useRef();
  const [earthTexture, setEarthTexture] = useState(null);
  const [timeSinceClick, setTimeSinceClick] = useState(0);
  const [pointerPosition, setPointerPosition] = useState(new THREE.Vector3(0, 0, 1));
  const [dragged, setDragged] = useState(false);
  const [raycaster] = useState(new THREE.Raycaster());
  const [camera] = useState(new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3));
  const [globeMesh, setGlobeMesh] = useState(null);
  const [mapMaterial, setMapMaterial] = useState(null);

  // Load earth texture
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      'https://ksenia-k.com/img/earth-map-colored.png',
      (texture) => {
        texture.repeat.set(1, 1);
        setEarthTexture(texture);
      }
    );
  }, []);

  // Create map material
  useEffect(() => {
    if (earthTexture) {
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_map_tex: { type: 't', value: earthTexture },
          u_dot_size: { type: 'f', value: 12 },
          u_pointer: { type: 'v3', value: new THREE.Vector3(0.0, 0.0, 1) },
          u_time_since_click: { value: 0 },
        },
        alphaTest: false,
        transparent: true,
      });
      setMapMaterial(material);
    }
  }, [earthTexture]);

  // Create pointer
  useEffect(() => {
    if (globeRef.current) {
      const geometry = new THREE.SphereGeometry(0.04, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0,
      });
      const pointer = new THREE.Mesh(geometry, material);
      globeRef.current.add(pointer);
      pointerRef.current = pointer;
    }
  }, [globeRef.current]);

  // Handle drag detection
  useEffect(() => {
    if (globeRef.current) {
      let timestamp;
      const handleStart = () => {
        timestamp = Date.now();
      };
      const handleEnd = () => {
        setDragged(Date.now() - timestamp > 600);
      };

      globeRef.current.addEventListener('pointerdown', handleStart);
      globeRef.current.addEventListener('pointerup', handleEnd);

      return () => {
        globeRef.current?.removeEventListener('pointerdown', handleStart);
        globeRef.current?.removeEventListener('pointerup', handleEnd);
      };
    }
  }, [globeRef.current]);

  // Animation frame
  useFrame((state) => {
    if (mapMaterial) {
      mapMaterial.uniforms.u_time_since_click.value = timeSinceClick;
    }

    if (globeMesh && state.mouse.x !== 0 && state.mouse.y !== 0) {
      raycaster.setFromCamera(state.mouse, camera);
      const intersects = raycaster.intersectObject(globeMesh);
      
      if (intersects.length) {
        if (!dragged && intersects[0].point) {
          const point = intersects[0].point.clone();
          point.normalize();
          
          if (pointerRef.current) {
            pointerRef.current.position.copy(point);
          }
          
          // Update coordinates
          const lat = 90 - (Math.acos(point.y) * 180) / Math.PI;
          const lng = ((270 + (Math.atan2(point.x, point.z) * 180) / Math.PI) % 360) - 180;
          
          // Call onPointerMove with coordinates
          if (onPointerMove) {
            onPointerMove({ lat, lng, point });
          }
        }
      }
    }
  });

  // Handle click
  const handleClick = () => {
    if (!pointerRef.current) return;
    
    setTimeSinceClick(0);
    setPointerPosition(pointerRef.current.position.clone());
    
    if (onClick) {
      onClick(pointerRef.current.position.clone());
    }
  };

  // Update time since click
  useEffect(() => {
    let interval;
    if (timeSinceClick < 5) {
      interval = setInterval(() => {
        setTimeSinceClick(prev => prev + 0.016);
      }, 16);
    }
    return () => clearInterval(interval);
  }, [timeSinceClick]);

  return (
    <group ref={globeRef} scale={scale} position={position} onClick={handleClick}>
      {/* Base globe mesh for raycasting */}
      <mesh ref={mesh => setGlobeMesh(mesh)}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#222222" transparent opacity={0.05} />
      </mesh>
      
      {/* Points globe with shader material */}
      {mapMaterial && (
        <points>
          <icosahedronGeometry args={[1, 22]} />
          <primitive object={mapMaterial} attach="material" />
        </points>
      )}
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping={true}
        minPolarAngle={0.4 * Math.PI}
        maxPolarAngle={0.4 * Math.PI}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </group>
  );
};

export default Globe3D; 