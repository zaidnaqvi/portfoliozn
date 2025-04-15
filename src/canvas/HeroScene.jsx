import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { easing } from "maath";

function SpinningCube() {
  const mesh = useRef();
  useFrame(
    (state, delta) =>
      (mesh.current.rotation.x = mesh.current.rotation.y += 0.01)
  );

  return (
    <Box ref={mesh} scale={2} position={[0, 0, 0]}>
      <meshStandardMaterial color="lightblue" />
    </Box>
  );
}

function AnimatedSphere() {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [scale] = useState([1, 1, 1]);
  const targetScale = hovered ? [1.2, 1.2, 1.2] : scale;

  useFrame((state, delta) => {
    easing.damp3(mesh.current.scale, targetScale, 0.2, delta);
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh
      ref={mesh}
      position={[3, 1, 0]}
      scale={scale}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function FloatingObject({ modelPath, position, scale }) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.002;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <primitive object={scene} ref={ref} position={position} scale={scale} />
  );
}

function HeroScene() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.0001}
        castShadow
      />
      <SpinningCube />
      <AnimatedSphere />
      {/* Example of loading a 3D model (replace 'path/to/your/model.glb') */}
      {/* <FloatingObject modelPath="path/to/your/model.glb" position={[-3, 0, 0]} scale={[0.5, 0.5, 0.5]} /> */}
      <Environment preset="city" />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

export default HeroScene;
