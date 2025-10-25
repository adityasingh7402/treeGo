'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const floatingRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (floatingRef.current) {
      gsap.to(floatingRef.current.children, {
        y: -30,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    // Parallax effect for hero content
    if (heroContentRef.current && heroSectionRef.current) {
      gsap.to(heroContentRef.current, {
        y: 200,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroSectionRef} id="home" className="section" style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div ref={heroContentRef} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--card-bg)', padding: '8px 20px', borderRadius: 'var(--radius-xl)', marginBottom: '24px', border: '1px solid var(--card-border)' }}
            >
              <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                Welcome to TreeGo Solutions
              </span>
            </motion.div>

            <h1 style={{ marginBottom: '24px' }}>
              Crafting Digital <span className="gradient-text">Excellence</span>
              <br />
              For Modern Businesses
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontSize: '20px', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.8 }}
            >
              We transform ideas into stunning digital experiences. From web development to custom solutions, we deliver results that drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#portfolio"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            ref={floatingRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '24px',
              marginTop: '60px',
              maxWidth: '800px',
              margin: '60px auto 0',
            }}
          >
            {[
              { icon: '🚀', label: 'Fast Delivery', desc: 'Quick turnaround' },
              { icon: '💎', label: 'Premium Quality', desc: 'Top-tier code' },
              { icon: '🎯', label: 'Goal Focused', desc: 'Results driven' },
              { icon: '🔧', label: 'Full Support', desc: '24/7 assistance' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'var(--card-bg)',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--card-border)',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: 'var(--text-primary)' }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{
              position: 'absolute',
              top: `${20 + i * 30}%`,
              left: `${10 + i * 30}%`,
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'var(--accent-primary)',
              filter: 'blur(80px)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
