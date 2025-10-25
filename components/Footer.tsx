'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', padding: '48px 0 24px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Brand */}
          <div>
            <h3 className="gradient-text" style={{ fontSize: '28px', marginBottom: '16px' }}>TreeGo</h3>
            <p style={{ fontSize: '15px', marginBottom: '20px', maxWidth: '300px' }}>
              Crafting exceptional digital experiences that drive growth and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link, index) => (
                <motion.a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Strategy'].map((service, index) => (
                <motion.a
                  key={index}
                  href="#services"
                  whileHover={{ x: 5 }}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {service}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>Stay Updated</h4>
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              Subscribe to our newsletter for the latest updates.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            © 2025 TreeGo. Made with <Heart size={16} style={{ color: 'var(--accent-primary)' }} fill="var(--accent-primary)" /> by TreeGo Team
          </p>

          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2 }}
                style={{
                  color: 'var(--text-tertiary)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-tertiary)';
                }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
