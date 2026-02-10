import { motion } from 'framer-motion';
import { FloatingDot, RotatingCircle } from './Doodles';
import './Footer.css';

/**
 * Footer Component
 * Contains company info, links, and copyright
 */
export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Decorative elements */}
      <div className="footer-decorations">
        <FloatingDot delay={0} x={5} y={20} size={10} />
        <FloatingDot delay={0.5} x={90} y={15} size={9} />
        <FloatingDot delay={1} x={15} y={75} size={11} />
        <RotatingCircle delay={1.5} x={85} y={70} size={35} />
      </div>

      <div className="footer-container">
        {/* About Section */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>About FruitShoppe</h3>
          <p>
            Bringing fresh, premium fruits to your doorstep since 2024. We believe in quality,
            freshness, and customer satisfaction.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Contact</h3>
          <p>Email: <a href="mailto:info@fruitshoppe.com">info@fruitshoppe.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Address: 123 Fruit Lane, Garden City, GC 12345</p>
        </motion.div>

        {/* Social Links */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Follow Us</h3>
          <div className="social-links">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Facebook
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Instagram
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Twitter
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div className="footer-bottom" variants={itemVariants}>
        <p>&copy; 2024 FruitShoppe. All rights reserved. | Designed with ❤️</p>
      </motion.div>
    </motion.footer>
  );
}
