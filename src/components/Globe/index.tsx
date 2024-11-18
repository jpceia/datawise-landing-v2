'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import styles from './styles.module.css'
import { vertexShader, fragmentShader } from './shaders'
import type { GlobeState } from './types'

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvas3DRef = useRef<HTMLCanvasElement>(null)
  const canvas2DRef = useRef<HTMLCanvasElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef<GlobeState>({
    renderer: null,
    scene: null,
    camera: null,
    rayCaster: null,
    controls: null,
    globe: null,
    globeMesh: null,
    pointer: null,
    mapMaterial: null,
    earthTexture: null,
    coordinates2D: [0, 0],
    popupVisible: false,
    dragged: false,
    mouse: new THREE.Vector2(-1, -1),
    clock: new THREE.Clock(),
  })

  // Animation timelines
  const popupOpenTl = useRef<gsap.core.Timeline | null>(null)
  const popupCloseTl = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (
      !containerRef.current ||
      !canvas3DRef.current ||
      !canvas2DRef.current ||
      !popupRef.current
    )
      return

    const state = stateRef.current
    const overlayCtx = canvas2DRef.current.getContext('2d')
    if (!overlayCtx) return

    const createOrbitControls = () => {
      if (!state.camera || !canvas3DRef.current) return

      state.controls = new OrbitControls(state.camera, canvas3DRef.current)
      state.controls.enablePan = false
      state.controls.enableZoom = false
      state.controls.enableDamping = true
      state.controls.minPolarAngle = 0.4 * Math.PI
      state.controls.maxPolarAngle = 0.4 * Math.PI
      state.controls.autoRotate = true

      let timestamp: number
      state.controls.addEventListener('start', () => {
        timestamp = Date.now()
      })
      state.controls.addEventListener('end', () => {
        state.dragged = Date.now() - timestamp > 600
      })
    }

    const createGlobe = () => {
      if (!state.scene || !state.earthTexture) return

      const globeGeometry = new THREE.IcosahedronGeometry(1, 22)
      state.mapMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_map_tex: { value: state.earthTexture },
          u_dot_size: { value: 0 },
          u_pointer: { value: new THREE.Vector3(0.0, 0.0, 1) },
          u_time_since_click: { value: 0 },
        },
        transparent: true,
      })

      state.globe = new THREE.Points(globeGeometry, state.mapMaterial)
      state.scene.add(state.globe)

      state.globeMesh = new THREE.Mesh(
        globeGeometry,
        new THREE.MeshBasicMaterial({
          color: 0x222222,
          transparent: true,
          opacity: 0.05,
        })
      )
      state.scene.add(state.globeMesh)
    }

    const createPointer = () => {
      if (!state.scene) return

      const geometry = new THREE.SphereGeometry(0.04, 16, 16)
      const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0,
      })
      state.pointer = new THREE.Mesh(geometry, material)
      state.scene.add(state.pointer)
    }

    const createPopupTimelines = () => {
      if (!state.pointer || !popupRef.current || !canvas2DRef.current) return

      popupOpenTl.current = gsap
        .timeline({
          paused: true,
        })
        .to(
          state.pointer.material,
          {
            duration: 0.2,
            opacity: 1,
          },
          0
        )
        .fromTo(
          canvas2DRef.current,
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
          popupRef.current,
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
          0.25
        )

      popupCloseTl.current = gsap
        .timeline({
          paused: true,
        })
        .to(
          state.pointer.material,
          {
            duration: 0.3,
            opacity: 0.2,
          },
          0
        )
        .to(
          canvas2DRef.current,
          {
            duration: 0.3,
            opacity: 0,
          },
          0
        )
        .to(
          popupRef.current,
          {
            duration: 0.3,
            opacity: 0,
            scale: 0.9,
            transformOrigin: 'center bottom',
          },
          0
        )
    }

    const updateSize = () => {
      if (!containerRef.current || !state.renderer || !state.mapMaterial) return

      const minSide = 0.65 * Math.min(window.innerWidth, window.innerHeight)
      containerRef.current.style.width = `${minSide}px`
      containerRef.current.style.height = `${minSide}px`
      state.renderer.setSize(minSide, minSide)

      if (canvas2DRef.current) {
        canvas2DRef.current.width = minSide
        canvas2DRef.current.height = minSide
      }

      state.mapMaterial.uniforms.u_dot_size.value = 0.04 * minSide
    }

    const checkIntersects = () => {
      if (!state.rayCaster || !state.camera || !state.globeMesh) return []

      state.rayCaster.setFromCamera(state.mouse, state.camera)
      const intersects = state.rayCaster.intersectObject(state.globeMesh)

      if (intersects.length) {
        document.body.style.cursor = 'pointer'
      } else {
        document.body.style.cursor = 'auto'
      }

      return intersects
    }

    const drawPopupConnector = (
      startX: number,
      startY: number,
      midX: number,
      midY: number,
      endX: number,
      endY: number
    ) => {
      if (!overlayCtx) return

      overlayCtx.strokeStyle = '#000000'
      overlayCtx.lineWidth = 3
      overlayCtx.lineCap = 'round'
      overlayCtx.clearRect(
        0,
        0,
        containerRef.current?.offsetWidth || 0,
        containerRef.current?.offsetHeight || 0
      )
      overlayCtx.beginPath()
      overlayCtx.moveTo(startX, startY)
      overlayCtx.quadraticCurveTo(midX, midY, endX, endY)
      overlayCtx.stroke()
    }

    const showPopupAnimation = (lifted: boolean) => {
      if (!state.pointer || !popupCloseTl.current || !popupOpenTl.current)
        return

      if (lifted) {
        const positionLifted = state.pointer.position.clone()
        positionLifted.multiplyScalar(1.3)
        gsap.from(state.pointer.position, {
          duration: 0.25,
          x: positionLifted.x,
          y: positionLifted.y,
          z: positionLifted.z,
          ease: 'power3.out',
        })
      }
      popupCloseTl.current.pause(0)
      popupOpenTl.current.play(0)
    }

    const updateOverlayGraphic = () => {
      if (
        !state.pointer ||
        !state.globe ||
        !state.camera ||
        !containerRef.current
      )
        return

      const activePointPosition = state.pointer.position.clone()
      activePointPosition.applyMatrix4(state.globe.matrixWorld)
      const activePointPositionProjected = activePointPosition.clone()
      activePointPositionProjected.project(state.camera)

      state.coordinates2D[0] =
        (activePointPositionProjected.x + 1) *
        containerRef.current.offsetWidth *
        0.5
      state.coordinates2D[1] =
        (1 - activePointPositionProjected.y) *
        containerRef.current.offsetHeight *
        0.5

      if (state.controls) {
        const camera = state.controls.object as THREE.Camera
        const matrixWorldInverse = camera.matrixWorldInverse
        activePointPosition.applyMatrix4(matrixWorldInverse)

        if (activePointPosition.z > -1) {
          if (!state.popupVisible) {
            state.popupVisible = true
            showPopupAnimation(false)
          }

          let popupX = state.coordinates2D[0]
          popupX -=
            activePointPositionProjected.x *
            containerRef.current.offsetWidth *
            0.3

          let popupY = state.coordinates2D[1]
          const upDown = activePointPositionProjected.y > 0.6
          popupY += upDown ? 20 : -20

          gsap.set(popupRef.current, {
            x: popupX,
            y: popupY,
            xPercent: -35,
            yPercent: upDown ? 0 : -100,
          })

          popupY += upDown ? -5 : 5
          const curveMidX = popupX + activePointPositionProjected.x * 100
          const curveMidY =
            popupY + (upDown ? -0.5 : 0.1) * state.coordinates2D[1]

          drawPopupConnector(
            state.coordinates2D[0],
            state.coordinates2D[1],
            curveMidX,
            curveMidY,
            popupX,
            popupY
          )
        } else {
          if (state.popupVisible) {
            popupOpenTl.current?.pause(0)
            popupCloseTl.current?.play(0)
          }
          state.popupVisible = false
        }
      }
    }

    const addCanvasEvents = () => {
      if (!containerRef.current) return

      const updateMousePosition = (eX: number, eY: number) => {
        if (!containerRef.current) return

        state.mouse.x =
          ((eX - containerRef.current.offsetLeft) /
            containerRef.current.offsetWidth) *
            2 -
          1
        state.mouse.y =
          -(
            (eY - containerRef.current.offsetTop) /
            containerRef.current.offsetHeight
          ) *
            2 +
          1
      }

      containerRef.current.addEventListener('mousemove', e => {
        updateMousePosition(e.clientX, e.clientY)
      })
    }

    const render = () => {
      if (
        !state.renderer ||
        !state.scene ||
        !state.camera ||
        !state.mapMaterial
      )
        return

      state.mapMaterial.uniforms.u_time_since_click.value =
        state.clock.getElapsedTime()
      checkIntersects()
      if (state.pointer) {
        updateOverlayGraphic()
      }
      state.controls?.update()
      state.renderer.render(state.scene, state.camera)
      requestAnimationFrame(render)
    }

    const init = async () => {
      // Initialize Three.js scene
      state.renderer = new THREE.WebGLRenderer({
        canvas: canvas3DRef.current!,
        alpha: true,
      })
      state.renderer.setPixelRatio(2)

      state.scene = new THREE.Scene()
      state.camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3)
      state.camera.position.z = 1.1

      state.rayCaster = new THREE.Raycaster()
      state.rayCaster.far = 1.15

      createOrbitControls()

      // Load earth texture
      const textureLoader = new THREE.TextureLoader()
      state.earthTexture = await textureLoader.loadAsync(
        'https://ksenia-k.com/img/earth-map-colored.png'
      )
      state.earthTexture.repeat.set(1, 1)

      createGlobe()
      createPointer()
      createPopupTimelines()
      addCanvasEvents()
      updateSize()
      render()
    }

    // Initialize
    init()

    // Add resize listener
    window.addEventListener('resize', updateSize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize)
      state.renderer?.dispose()
      state.scene?.clear()
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.page}>
        <div className={styles.globeWrapper}>
          <canvas ref={canvas3DRef} className={styles.globe3D} />
          <canvas ref={canvas2DRef} className={styles.globe2DOverlay} />
          <div className={styles.globePopupOverlay}>
            <div ref={popupRef} className={styles.globePopup} />
          </div>
        </div>
      </div>
    </div>
  )
}
