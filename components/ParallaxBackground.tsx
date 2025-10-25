'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Zap, Database, Cloud, Cpu, Globe, Layers, Box } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBackground() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layers = [
      { ref: layer1Ref, speed: 0.8 },  // Fastest - moves most
      { ref: layer2Ref, speed: 0.4 },  // Medium speed
      { ref: layer3Ref, speed: 0.2 },  // Slowest - barely moves
    ];

    layers.forEach(({ ref, speed }) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: () => window.innerHeight * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
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
      {/* LAYER 3 - SLOWEST (Back Layer) - Barely moves */}
      <div
        ref={layer3Ref}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Large Decorative Circles */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '3px solid var(--accent-primary)',
          opacity: 0.15,
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          border: '3px solid var(--accent-secondary)',
          opacity: 0.12,
        }} />

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          width: '200px',
          height: '200px',
          backgroundImage: 'linear-gradient(var(--accent-primary) 1px, transparent 1px), linear-gradient(90deg, var(--accent-primary) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.1,
          transform: 'rotate(15deg)',
        }} />
      </div>

      {/* LAYER 2 - MEDIUM SPEED (Middle Layer) */}
      <div
        ref={layer2Ref}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Tech Icons - Medium Speed */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          padding: '20px',
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-md)',
          border: '2px solid var(--card-border)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-lg)',
        }}>
          <Code size={48} color="var(--accent-primary)" />
        </div>

        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          padding: '20px',
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-md)',
          border: '2px solid var(--card-border)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-lg)',
        }}>
          <Database size={48} color="var(--accent-secondary)" />
        </div>

        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          padding: '20px',
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-md)',
          border: '2px solid var(--card-border)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-lg)',
        }}>
          <Cloud size={48} color="var(--accent-primary)" />
        </div>
      </div>

      {/* LAYER 1 - FASTEST (Front Layer) - Moves most */}
      <div
        ref={layer1Ref}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Large Visible Icons - Fast Movement */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
          borderRadius: '50%',
          border: '3px solid var(--accent-primary)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(59,130,246,0.3)',
        }}>
          <Zap size={64} color="var(--accent-primary)" strokeWidth={2} />
        </div>

        <div style={{
          position: 'absolute',
          top: '45%',
          left: '15%',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))',
          borderRadius: '50%',
          border: '3px solid var(--accent-secondary)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(139,92,246,0.3)',
        }}>
          <Cpu size={64} color="var(--accent-secondary)" strokeWidth={2} />
        </div>

        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
          borderRadius: '50%',
          border: '3px solid var(--accent-primary)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(59,130,246,0.3)',
        }}>
          <Globe size={64} color="var(--accent-primary)" strokeWidth={2} />
        </div>

        <div style={{
          position: 'absolute',
          top: '70%',
          left: '40%',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))',
          borderRadius: '50%',
          border: '3px solid var(--accent-secondary)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(139,92,246,0.3)',
        }}>
          <Layers size={64} color="var(--accent-secondary)" strokeWidth={2} />
        </div>

        <div style={{
          position: 'absolute',
          top: '35%',
          right: '35%',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
          borderRadius: '50%',
          border: '3px solid var(--accent-primary)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(59,130,246,0.3)',
        }}>
          <Box size={64} color="var(--accent-primary)" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
