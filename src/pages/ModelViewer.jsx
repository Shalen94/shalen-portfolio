import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import './Navbar.css' ;
function Model() {
  const { scene } = useGLTF(import.meta.env.BASE_URL + "Models/dragon10.glb");
  

  return <primitive object={scene} scale={1.5} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "600px" }} className="aboutModal" >
      <div className="div1-wrapper">
        <div className="aboutmetext">
          <h3>Welocome to my world </h3>
          <h1 className="typing">
            <span>I'm</span> Shali 
          </h1>
          <p>I’m a passionate and industry-ready Full-Stack Developer who enjoys building scalable, efficient and user-focused web applications. With experience in React, Node.js and REST APIs, I turn complex ideas into clean, functional and impactful digital solutions. I focus on writing maintainable code, improving performance and creating applications that solve real-world problems while continuously learning and growing as a developer</p>
        </div>
      </div>

      {window.innerWidth > 630 && (
  <Canvas shadows camera={{ position: [5, 0, 0], fov: 45 }} className="object">
    <ambientLight intensity={0.5} />
    <Stage adjustCamera={1.2} center={false}>
      <group position={[10,0,0]}>
        <Model />
      </group>
    </Stage>
    <OrbitControls enableZoom={true} enablePan={true} />
  </Canvas>
)}

    </div>
  );
}
