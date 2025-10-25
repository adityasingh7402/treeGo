'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Server, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Parallax effect for the entire section
      gsap.to(sectionRef.current, {
        y: -50,
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

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind, ensuring seamless interactions.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital solutions tailored to your business goals and target audience.',
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with secure APIs and database architecture.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Speed up your digital products with cutting-edge optimization techniques.',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ marginBottom: '16px' }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
            Comprehensive digital solutions to elevate your business to the next level
          </p>
        </motion.div>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card"
              style={{ cursor: 'pointer' }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'inline-flex',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'white',
                  marginBottom: '20px',
                }}
              >
                {service.icon}
              </motion.div>

              <h3 style={{ marginBottom: '12px', fontSize: '22px' }}>{service.title}</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, margin: 0 }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
