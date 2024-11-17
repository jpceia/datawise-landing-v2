// components/Globe/types.ts

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface GlobeState {
  renderer: THREE.WebGLRenderer | null;
  scene: THREE.Scene | null;
  camera: THREE.OrthographicCamera | null;
  rayCaster: THREE.Raycaster | null;
  controls: OrbitControls | null;
  globe: THREE.Points | null;
  globeMesh: THREE.Mesh | null;
  pointer: THREE.Mesh | null;
  mapMaterial: THREE.ShaderMaterial | null;
  earthTexture: THREE.Texture | null;
  coordinates2D: [number, number];
  popupVisible: boolean;
  dragged: boolean;
  mouse: THREE.Vector2;
  clock: THREE.Clock;
}