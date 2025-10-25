'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'hello@treego.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'San Francisco, CA',
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ marginBottom: '16px' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
            Ready to start your next project? Let's discuss how we can help you achieve your goals
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="contact-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                  }}
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                style={{
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                }}
              />

              <input
                type="text"
                placeholder="Subject"
                style={{
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                }}
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                style={{
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
              />

              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="card"
                style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
              >
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white',
                    display: 'flex',
                    flexShrink: 0,
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                    {info.title}
                  </h4>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card"
              style={{ marginTop: '20px', textAlign: 'center' }}
            >
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>Let's Build Something Amazing</h3>
              <p style={{ marginBottom: '24px', fontSize: '15px' }}>
                We're excited to learn about your project and help bring your vision to life.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -4 }}
                    style={{
                      padding: '10px 20px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 500,
                    }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
