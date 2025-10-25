'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingShapes() {
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);
  const shape4Ref = useRef<HTMLDivElement>(null);
  const shape5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = [
      { ref: shape1Ref, speed: 0.6, direction: 1 },
      { ref: shape2Ref, speed: 0.4, direction: -1 },
      { ref: shape3Ref, speed: 0.7, direction: 1 },
      { ref: shape4Ref, speed: 0.3, direction: -1 },
      { ref: shape5Ref, speed: 0.5, direction: 1 },
    ];

    shapes.forEach(({ ref, speed, direction }) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: direction * window.innerHeight * speed,
          x: direction * 100,
          rotation: direction * 360,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      minHeight: '300vh',
      zIndex: 0,
      overflow: 'visible',
      pointerEvents: 'none',
    }}>
      {/* Shape 1 - Top Right Circle */}
      <div
        ref={shape1Ref}
        style={{
          position: 'absolute',
          top: '5%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.05) 100%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Shape 2 - Left Middle Square */}
      <div
        ref={shape2Ref}
        style={{
          position: 'absolute',
          top: '30%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '30%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(59,130,246,0.05) 100%)',
          filter: 'blur(40px)',
          transform: 'rotate(45deg)',
        }}
      />

      {/* Shape 3 - Center Blob */}
      <div
        ref={shape3Ref}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '400px',
          height: '400px',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          background: 'radial-gradient(ellipse, rgba(96,165,250,0.12) 0%, rgba(167,139,250,0.03) 100%)',
          filter: 'blur(50px)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Shape 4 - Bottom Right Triangle-ish */}
      <div
        ref={shape4Ref}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '280px',
          height: '280px',
          borderRadius: '20% 80% 30% 70% / 60% 40% 60% 40%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.06) 100%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Shape 5 - Bottom Left Oval */}
      <div
        ref={shape5Ref}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '350px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(167,139,250,0.15) 0%, rgba(96,165,250,0.04) 100%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Additional decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '40%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
        opacity: 0.08,
        filter: 'blur(25px)',
      }} />

      <div style={{
        position: 'absolute',
        top: '70%',
        left: '60%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(225deg, var(--accent-secondary), var(--accent-primary))',
        opacity: 0.06,
        filter: 'blur(30px)',
      }} />
    </div>
  );
}
