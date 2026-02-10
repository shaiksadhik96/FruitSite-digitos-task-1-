import { motion } from 'framer-motion';
import './SectionTitle.css';

/**
 * Section Title Component
 * Reusable animated section header
 */
export default function SectionTitle({ title, subtitle }) {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { delay: 0.3, duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="section-title"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>{title}</h2>
      <motion.div
        className="title-underline"
        variants={underlineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
