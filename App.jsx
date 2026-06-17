import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// --- 1. 3D CHARACTER COMPONENT ---
const CinematicHuman = () => {
  const group = useRef();
  
  // GitHub Pages par 404 error na aaye, isliye BASE_URL ka use kiya hai
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}human.glb`);  

  useEffect(() => {
    // Scroll Animation - Character moves and rotates on scroll
    ScrollTrigger.create({
      trigger: ".main-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      onUpdate: (self) => {
        gsap.to(group.current.rotation, {
          y: self.progress * Math.PI * 2,
          ease: "power2.out"
        });
        gsap.to(group.current.position, {
          y: -self.progress * 4,
          ease: "power2.out"
        });
      }
    });
  }, []);

  // Mouse Follow Interaction - Character looks at cursor
  useFrame((state) => {
    const target = new THREE.Vector3(
      (state.mouse.x * state.viewport.width) / 4,
      (state.mouse.y * state.viewport.height) / 4,
      5
    );
    group.current.lookAt(target);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={group} position={[0, 0, 0]}>
        {/* Asli 3D Model Render Block */}
        <primitive object={scene} scale={1.5} position={[0, -2, 0]} />
      </group>
    </Float>
  );
};

// --- 2. MAIN APPLICATION ---
export default function App() {
  return (
    <div className="main-container" style={{ backgroundColor: '#050505', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* BACKGROUND 3D CANVAS */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#00ffff" />
          <spotLight position={[-10, -10, -5]} intensity={2} color="#ff00ff" />
          <Environment preset="city" />
          
          <Suspense fallback={null}>
            <CinematicHuman />
          </Suspense>

          <ContactShadows position={[0, -3, 0]} opacity={0.8} scale={10} blur={2} far={4} />
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* FOREGROUND UI / WEBSITE CONTENT */}
      <main style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        
        {/* HERO SECTION */}
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: 'bold', margin: 0, background: 'linear-gradient(to right, #fff, #555)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            WORLD WIDE<br/>CORE APEX
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#888', marginTop: '20px', maxWidth: '600px' }}>
            Building Tomorrow Beyond Boundaries. Technology • Innovation • Global Vision
          </p>
          <div style={{ marginTop: '40px', pointerEvents: 'auto' }}>
            <button style={{ padding: '15px 40px', fontSize: '1.2rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '30px', backdropFilter: 'blur(10px)', cursor: 'pointer' }}>
              Enter The Future
            </button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)' }}>
          <h2 style={{ fontSize: '3.5rem' }}>About JAY</h2>
          <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '800px', lineHeight: '1.6' }}>
            A digital ecosystem representing innovation, intelligence, and future technology across all global cultures. This is not just a portfolio; this is a living digital entity.
          </p>
        </section>

        {/* GALLERY / CARDS SECTION */}
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <h2 style={{ fontSize: '3.5rem' }}>Global Innovation</h2>
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
             {/* Sample Glassmorphism Cards */}
             {[1, 2, 3].map((item) => (
                <div key={item} style={{ flex: 1, height: '300px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', backdropFilter: 'blur(15px)' }}></div>
             ))}
          </div>
        </section>

      </main>
    </div>
  );
}