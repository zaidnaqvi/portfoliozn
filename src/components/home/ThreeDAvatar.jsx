// components/home/ThreeDAvatar.jsx
import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";

const ThreeDAvatar = () => {
  const model = useGLTF("/models/avatar.glb"); // Put your GLB model inside /public/models

  return (
    <Suspense fallback={null}>
      <primitive object={model.scene} scale={2.2} position-y={-1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Suspense>
  );
};

export default ThreeDAvatar;
