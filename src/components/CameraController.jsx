import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export function CameraController() {
  const { camera, gl } = useThree();
  const [cameraMode, setCameraMode] = useState("orbit"); // 'orbit' or 'firstPerson'
  const controlsRef = useRef();

  // Event listener setup for pointer lock API
  useEffect(() => {
    const handlePointerLockChange = () => {
      if (document.pointerLockElement === gl.domElement) {
        setCameraMode('firstPerson');
      } else {
        setCameraMode('orbit');
      }
    };
    document.addEventListener('pointerlockchange', handlePointerLockChange);

    return () => {
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
    };
  }, [gl.domElement]);

  // Switching logic: When you click the button, this function should be called
  const switchCameraMode = () => {
    if (cameraMode === 'firstPerson') {
      document.exitPointerLock();
    } else {
      gl.domElement.requestPointerLock();
    }
  };

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <>
      {cameraMode === 'orbit' && <OrbitControls ref={controlsRef} />}
      {cameraMode === 'firstPerson' && <PointerLockControls />}
    </>
  );
}