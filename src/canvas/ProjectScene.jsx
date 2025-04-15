import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Environment, Html } from "@react-three/drei";
import { easing } from "maath";

function ProjectModel({ project, position }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [scale] = useState([1, 1, 1]);
  const targetScale = hovered ? [1.1, 1.1, 1.1] : scale;

  useFrame((state, delta) => {
    easing.damp3(mesh.current.scale, targetScale, 0.2, delta);
    mesh.current.rotation.y += 0.003;
  });

  return (
    <group position={position}>
      <mesh
        ref={mesh}
        scale={scale}
        onPointerOver={(event) => setHovered(true)}
        onPointerOut={(event) => setHovered(false)}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={project.color || "tomato"} />
      </mesh>
      <Html position={[0, -1.5, 0]} center>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          {project.name}
        </div>
      </Html>
    </group>
  );
}

function ProjectScene({ projects }) {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 50 }}>
      <ambientLight intensity={0.4} />
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
      <Environment preset="sunset" />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.3}
        enableZoom={true}
        enablePan={true}
      />
      {projects.map((project, index) => (
        <ProjectModel
          key={index}
          project={project}
          position={[(index - projects.length / 2) * 3, 0, 0]}
        />
      ))}
    </Canvas>
  );
}

export default ProjectScene;
