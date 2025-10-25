'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with seamless checkout and inventory management.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Patient management system with telemedicine capabilities and health tracking.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Finance Dashboard',
      category: 'Web Application',
      description: 'Real-time analytics dashboard for financial data visualization and reporting.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Social Platform',
      category: 'Full Stack',
      description: 'Community-driven platform with real-time messaging and content sharing.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'On-demand food delivery with live tracking and smart recommendations.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'SaaS Platform',
      category: 'Enterprise Solution',
      description: 'Scalable B2B platform with multi-tenant architecture and analytics.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ marginBottom: '16px' }}>
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
            Showcasing our best work and successful projects across various industries
          </p>
        </motion.div>

        <div className="grid grid-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="card"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  height: '200px',
                  background: project.gradient,
                  marginBottom: '20px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '48px',
                  fontWeight: 700,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    background: 'rgba(0,0,0,0.7)',
                    opacity: 0,
                  }}
                  className="project-overlay"
                >
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '12px',
                      display: 'flex',
                      cursor: 'pointer',
                    }}
                  >
                    <ExternalLink size={20} color="#000" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '12px',
                      display: 'flex',
                      cursor: 'pointer',
                    }}
                  >
                    <Github size={20} color="#000" />
                  </motion.button>
                </motion.div>
              </div>

              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-tertiary)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  marginBottom: '12px',
                }}
              >
                {project.category}
              </div>

              <h3 style={{ marginBottom: '12px', fontSize: '22px' }}>{project.title}</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, margin: 0 }}>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card:hover .project-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
