import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Page3DCharacter.css";

interface Page3DCharacterProps {
  modelPath: string;
}

function RobotModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.2} />;
}

const Page3DCharacter: React.FC<Page3DCharacterProps> = ({ modelPath }) => {
  return (
    <div className="ai-3d-character-container">
      <Canvas camera={{ position: [0, 1.2, 2.5], fov: 45 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 2]} intensity={0.7} />
        <Suspense fallback={null}>
          <RobotModel modelPath={modelPath} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
};

export default Page3DCharacter;
