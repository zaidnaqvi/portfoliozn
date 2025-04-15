// components/AnimatedSphere.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  MeshDistortMaterial,
  Sphere,
  ContactShadows,
} from "@react-three/drei";
import { gsap } from "gsap";

function AnimatedSphere() {
  const sphereRef = useRef();

  // Smooth idle rotation
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003;
    }
  });

  const handleRotate = () => {
    if (sphereRef.current) {
      gsap.to(sphereRef.current.rotation, {
        y: sphereRef.current.rotation.y + Math.PI * 2,
        duration: 1.2,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="sunset" />

      <Sphere
        args={[1.5, 64, 64]}
        position={[0, 0, 0]}
        ref={sphereRef}
        onPointerDown={handleRotate}
        onTouchStart={handleRotate}
      >
        <MeshDistortMaterial
          color="#38bdf8"
          distort={0.5}
          speed={2}
          roughness={0.1}
        />
      </Sphere>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.3}
        scale={10}
        blur={2}
        far={4.5}
      />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  );
}

export default AnimatedSphere;
