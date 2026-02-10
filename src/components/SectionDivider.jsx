import { motion } from 'framer-motion';
import './SectionDivider.css';

/**
 * Animated Section Divider Component
 * Decorative line separating content sections
 */
export const SectionDivider = ({ 
  color = 'orange', 
  dots = true 
}) => {
  const colorMap = {
    orange: '#f39c12',
    red: '#e74c3c',
    yellow: '#f1c40f',
    green: '#27ae60',
    purple: '#8e44ad',
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      className="section-divider"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left dots */}
      <div className="divider-dots-left">
        {dots && [0, 1, 2].map((i) => (
          <motion.div
            key={`left-${i}`}
            className="divider-dot"
            style={{ background: colorMap[color] }}
            variants={dotVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ))}
      </div>

      {/* Main line */}
      <motion.div
        className="divider-line"
        variants={lineVariants}
        style={{
          background: `linear-gradient(90deg, transparent, ${colorMap[color]}, transparent)`,
        }}
      />

      {/* Right dots */}
      <div className="divider-dots-right">
        {dots && [0, 1, 2].map((i) => (
          <motion.div
            key={`right-${i}`}
            className="divider-dot"
            style={{ background: colorMap[color] }}
            variants={dotVariants}
            custom={2 - i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ))}
      </div>
    </motion.div>
  );
};

/**
 * Small decorative doodly line element
 */
export const SmallDoodle = ({ color = 'orange', size = 'small' }) => {
  const colorMap = {
    orange: '#f39c12',
    red: '#e74c3c',
    yellow: '#f1c40f',
    green: '#27ae60',
    purple: '#8e44ad',
  };

  const sizeMap = {
    small: { width: 60, height: 4 },
    medium: { width: 120, height: 5 },
    large: { width: 200, height: 6 },
  };

  const doodle = sizeMap[size] || sizeMap['small'];

  return (
    <motion.svg
      width={doodle.width}
      height={doodle.height}
      viewBox={`0 0 ${doodle.width} ${doodle.height}`}
      className="small-doodle"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <path
        d={`M 0 ${doodle.height / 2} Q ${doodle.width / 4} 0 ${doodle.width / 2} ${doodle.height / 2} T ${doodle.width} ${doodle.height / 2}`}
        stroke={colorMap[color]}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

/**
 * Wavy divider component
 */
export const WavyDivider = ({ color = 'orange', height = 60 }) => {
  const colorMap = {
    orange: '#f39c12',
    red: '#e74c3c',
    yellow: '#f1c40f',
    green: '#27ae60',
    purple: '#8e44ad',
  };

  return (
    <motion.svg
      viewBox="0 0 1200 60"
      width="100%"
      height={height}
      className="wavy-divider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colorMap[color]} stopOpacity="0.3" />
          <stop offset="50%" stopColor={colorMap[color]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={colorMap[color]} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30"
        fill="none"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g>
        <circle cx="150" cy="30" r="4" fill={colorMap[color]} opacity="0.6" />
        <circle cx="450" cy="30" r="4" fill={colorMap[color]} opacity="0.6" />
        <circle cx="750" cy="30" r="4" fill={colorMap[color]} opacity="0.6" />
        <circle cx="1050" cy="30" r="4" fill={colorMap[color]} opacity="0.6" />
      </g>
    </motion.svg>
  );
};
