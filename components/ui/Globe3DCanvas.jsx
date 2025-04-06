import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Globe3D from './Globe3D';
import { gsap } from 'gsap';

const Globe3DCanvas = ({ className = '', scale = 1, position = [0, 0, 0], speed = 1 }) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const popupRef = useRef(null);
  const canvasRef = useRef(null);
  const [overlayCtx, setOverlayCtx] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      setOverlayCtx(canvasRef.current.getContext('2d'));
    }
  }, []);

  const formatCoordinate = (coordinate, positiveDirection, negativeDirection) => {
    const direction = coordinate >= 0 ? positiveDirection : negativeDirection;
    return `${Math.abs(coordinate).toFixed(4)}° ${direction}`;
  };

  const handlePointerMove = ({ lat, lng, point }) => {
    setCoordinates({ lat, lng });
    setPopupVisible(true);

    // Update popup position
    if (canvasRef.current && popupRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (point.x + 1) * rect.width * 0.5;
      const y = (1 - point.y) * rect.height * 0.5;
      setPopupPosition({ x, y });

      // Draw connector
      if (overlayCtx) {
        overlayCtx.clearRect(0, 0, rect.width, rect.height);
        overlayCtx.strokeStyle = '#333333';
        overlayCtx.lineWidth = 2;
        overlayCtx.lineCap = 'round';
        overlayCtx.beginPath();
        overlayCtx.moveTo(x, y);
        overlayCtx.lineTo(x, y + (point.y > 0.6 ? 20 : -20));
        overlayCtx.stroke();
      }
    }
  };

  const handleClick = (point) => {
    // Handle click animation or other click-related functionality
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{
          position: [0, 0, 3.5],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <color attach="background" args={['#f0f0f0']} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <Globe3D 
            scale={scale} 
            position={position} 
            speed={speed}
            onPointerMove={handlePointerMove}
            onClick={handleClick}
          />
        </Suspense>
      </Canvas>

      {/* Overlay canvas for drawing connectors */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Coordinate popup */}
      {popupVisible && (
        <div
          ref={popupRef}
          className="absolute bg-white text-gray-800 px-3 py-2 rounded shadow-lg pointer-events-none border border-gray-200"
          style={{
            left: popupPosition.x,
            top: popupPosition.y + (coordinates.lat > 0 ? 20 : -20),
            transform: 'translateX(-50%)',
            zIndex: 2,
          }}
        >
          <div className="text-sm">
            <div>{formatCoordinate(coordinates.lat, 'N', 'S')}</div>
            <div>{formatCoordinate(coordinates.lng, 'E', 'W')}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Globe3DCanvas; 