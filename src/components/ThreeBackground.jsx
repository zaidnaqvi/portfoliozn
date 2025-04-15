import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const ThreeBackground = () => {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeBackground;
