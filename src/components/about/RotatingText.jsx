import { Text } from "@react-three/drei";

function RotatingText() {
  return (
    <div className="relative w-full h-[500px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Text
          color="white"
          fontSize={1}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.1}
          position={[-5, 0, 0]}
        >
          My 3D Portfolio
        </Text>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default RotatingText;
