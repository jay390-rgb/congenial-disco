import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Har section ke liye premium smooth scroll fade animation
    gsap.utils.toArray('.fade-in-section').forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="main-container" style={{ backgroundColor: '#050505', color: 'white', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* PREMIUM FUTURISTIC PURE CSS GLOWING BACKGROUND */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, background: 'radial-gradient(circle at 50% 50%, #0d1117 0%, #050505 100%)' }}>
        {/* Neon Cyber Glow Effects (No 3D required, pure design) */}
        <div style={{ position: 'absolute', top: '15%', left: '15%', width: '350px', height: '350px', background: '#00ffff', filter: 'blur(160px)', opacity: 0.12 }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '450px', height: '450px', background: '#ff00ff', filter: 'blur(180px)', opacity: 0.1 }}></div>
      </div>

      {/* FOREGROUND UI / WEBSITE CONTENT */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        
        {/* HERO SECTION */}
        <section className="fade-in-section" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: 'bold', margin: 0, background: 'linear-gradient(to right, #ffffff, #777777)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-2px', lineHeight: '1.1' }}>
            WORLD WIDE<br/>CORE APEX
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#888', marginTop: '25px', maxWidth: '600px', lineHeight: '1.6' }}>
            Building Tomorrow Beyond Boundaries. Technology • Innovation • Global Vision
          </p>
          <div style={{ marginTop: '40px' }}>
            <button style={{ padding: '16px 42px', fontSize: '1.1rem', fontWeight: '500', backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30px', backdropFilter: 'blur(12px)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
              Enter The Future
            </button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="fade-in-section" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%', backgroundColor: 'rgba(5, 5, 5, 0.6)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', letterSpacing: '-1px' }}>About JAY</h2>
          <p style={{ fontSize: '1.25rem', color: '#aaa', maxWidth: '800px', lineHeight: '1.8' }}>
            A digital ecosystem representing innovation, intelligence, and future technology across all global cultures. This is not just a portfolio; this is a living digital entity built to scale without boundaries.
          </p>
        </section>

        {/* GALLERY / CARDS SECTION */}
        <section className="fade-in-section" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '40px', letterSpacing: '-1px' }}>Global Innovation</h2>
          <div style={{ display: 'flex', gap: '25px' }}>
             {/* Elite Glassmorphism Cards */}
             {[1, 2, 3].map((item) => (
                <div key={item} style={{ flex: 1, height: '320px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', backdropFilter: 'blur(20px)', padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', boxSizing: 'border-box' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: item === 1 ? '#00ffff' : item === 2 ? '#ff00ff' : '#ffffff', boxShadow: '0 0 15px currentColor', marginBottom: '20px' }}></div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.5rem', fontWeight: '600' }}>Core System 0{item}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.95rem', lineHeight: '1.4' }}>Next-generation global interface structure.</p>
                </div>
             ))}
          </div>
        </section>

      </main>
    </div>
  );
}