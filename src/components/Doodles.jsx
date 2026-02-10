import { motion } from 'framer-motion';
import './Doodles.css';

/**
 * Enhanced decorative doodles component with creative toy-like elements
 */
export const FloatingDot = ({ delay = 0, x = 0, y = 0, size = 8, color = 'orange' }) => {
  const colors = {
    orange: 'linear-gradient(135deg, #FFD700, #FF6347)',
    pink: 'linear-gradient(135deg, #FF69B4, #FF1493)',
    green: 'linear-gradient(135deg, #7CFC00, #228B22)',
    blue: 'linear-gradient(135deg, #87CEEB, #4169E1)',
    purple: 'linear-gradient(135deg, #DDA0DD, #8B008B)',
  };

  return (
    <motion.div
      className="floating-dot"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: colors[color] || colors.orange,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};

/**
 * Enhanced rotating circle with gradient border
 */
export const RotatingCircle = ({ delay = 0, x = 0, y = 0, size = 40, color = 'orange' }) => {
  return (
    <motion.div
      className="rotating-circle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color,
      }}
      animate={{ 
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: {
          duration: 15 + delay,
          repeat: Infinity,
          ease: 'linear',
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
      }}
    />
  );
};

/**
 * Sparkling star toy-like element
 */
export const SparkleStarShape = ({ x = 0, y = 0, size = 30, delay = 0 }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="url(#starGradient)"
          filter="drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))"
        />
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF6347" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

/**
 * Cute heart toy element
 */
export const ToyHeart = ({ x = 0, y = 0, size = 25, delay = 0 }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.2, 1],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21C12 21 3 15 3 9C3 6.2 5.2 4 8 4C9.7 4 11.2 4.8 12 6C12.8 4.8 14.3 4 16 4C18.8 4 21 6.2 21 9C21 15 12 21 12 21Z"
          fill="#FF1493"
          filter="drop-shadow(0 2px 6px rgba(255, 20, 147, 0.4))"
        />
      </svg>
    </motion.div>
  );
};

/**
 * Bouncing ball toy element
 */
export const BouncingBall = ({ x = 0, y = 0, size = 20, color = '#FF6B6B', delay = 0 }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${color}, ${color}88)`,
        boxShadow: `0 4px 12px ${color}66`,
      }}
      animate={{
        y: [0, -40, 0],
        scale: [1, 0.9, 1],
      }}
      transition={{
        duration: 2 + delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
};

/**
 * Decorative line element with animation
 */
export const DecorativeLine = ({ x1 = 0, y1 = 0, x2 = 100, y2 = 100 }) => {
  return (
    <svg
      className="decorative-line"
      viewBox="0 0 200 200"
      style={{
        position: 'absolute',
        left: `${x1}%`,
        top: `${y1}%`,
      }}
    >
      <motion.line
        x1="0"
        y1="0"
        x2={x2}
        y2={y2}
        stroke="url(#gradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#e74c3c" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/**
 * Premium Orange Shape - replaces mango for hero section
 */
export const OrangeShape = ({ size = 400 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="orange-shape"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <defs>
        <radialGradient id="orangeGradient" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF6500" />
        </radialGradient>
        <radialGradient id="orangeGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFA500" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orangeLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7CFC00" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        <filter id="orangeShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodOpacity="0.35"/>
        </filter>
      </defs>

      {/* Outer glow */}
      <circle cx="100" cy="100" r="85" fill="url(#orangeGlow)" opacity="0.5" />

      {/* Main orange body */}
      <circle cx="100" cy="100" r="75" fill="url(#orangeGradient)" filter="url(#orangeShadow)" />

      {/* Texture dots for realistic look */}
      {Array.from({ length: 50 }, (_, i) => {
        const angle = (i * 137.5 * Math.PI) / 180;
        const radius = 25 + (i % 40);
        const cx = 100 + radius * Math.cos(angle);
        const cy = 100 + radius * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="1.5" fill="#CC6600" opacity="0.4" />;
      })}

      {/* Leaf on top */}
      <ellipse
        cx="100"
        cy="30"
        rx="12"
        ry="18"
        fill="url(#orangeLeaf)"
        transform="rotate(-20 100 30)"
        filter="url(#orangeShadow)"
      />

      {/* Multiple highlight layers */}
      <ellipse cx="70" cy="65" rx="30" ry="35" fill="rgba(255,255,255,0.4)" />
      <ellipse cx="65" cy="60" rx="20" ry="25" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="62" cy="57" rx="12" ry="15" fill="rgba(255,255,255,0.7)" />

      {/* Bottom light reflection */}
      <ellipse cx="100" cy="140" rx="25" ry="18" fill="rgba(255,255,255,0.15)" />
    </motion.svg>
  );
};

/**
 * Mango shape SVG component (kept for compatibility)
 */
export const MangoShape = ({ size = 400 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mango-shape"
    >
      <defs>
        <linearGradient id="mangoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF6347" />
        </linearGradient>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
      </defs>

      {/* Main mango body */}
      <path
        d="M 100 20 C 140 25 170 60 170 110 C 170 170 140 230 100 240 C 60 230 30 170 30 110 C 30 60 60 25 100 20 Z"
        fill="url(#mangoGradient)"
        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
      />

      {/* Leaf */}
      <path
        d="M 100 20 Q 110 35 105 50 Q 98 45 100 20"
        fill="url(#leafGradient)"
      />

      {/* Highlight */}
      <ellipse cx="85" cy="80" rx="25" ry="30" fill="rgba(255,255,255,0.3)" />

      {/* Shine effect */}
      <ellipse cx="75" cy="70" rx="12" ry="15" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
};

/**
 * Premium Strawberry shape with enhanced 3D effect
 */
export const StrawberryShape = ({ size = 300 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="strawberry-shape"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <defs>
        <linearGradient id="berryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" />
          <stop offset="50%" stopColor="#FF4569" />
          <stop offset="100%" stopColor="#D50000" />
        </linearGradient>
        <linearGradient id="leafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#69F0AE" />
          <stop offset="100%" stopColor="#00C853" />
        </linearGradient>
        <radialGradient id="glowGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFE0E0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF1744" stopOpacity="0" />
        </radialGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Glow effect */}
      <ellipse cx="100" cy="120" rx="80" ry="100" fill="url(#glowGradient)" opacity="0.4" />

      {/* Leaves - more detailed */}
      <path d="M 60 15 L 50 35 Q 60 22 75 28 Q 65 20 60 15" fill="url(#leafGreen)" filter="url(#shadow)" />
      <path d="M 85 8 L 80 32 Q 95 18 105 23 Q 90 12 85 8" fill="url(#leafGreen)" filter="url(#shadow)" />
      <path d="M 115 8 L 120 32 Q 105 18 95 23 Q 110 12 115 8" fill="url(#leafGreen)" filter="url(#shadow)" />
      <path d="M 140 15 L 150 35 Q 140 22 125 28 Q 135 20 140 15" fill="url(#leafGreen)" filter="url(#shadow)" />
      <path d="M 100 5 L 98 30 Q 110 12 115 20 Q 105 10 100 5" fill="url(#leafGreen)" filter="url(#shadow)" />

      {/* Main body with enhanced gradient */}
      <path
        d="M 100 35 C 135 40 165 75 165 125 C 165 180 135 220 100 220 C 65 220 35 180 35 125 C 35 75 65 40 100 35 Z"
        fill="url(#berryGradient)"
        filter="url(#shadow)"
      />

      {/* Seeds with golden color */}
      {[
        [65, 65], [90, 70], [115, 65], [135, 70],
        [75, 95], [100, 100], [125, 95],
        [70, 125], [100, 130], [130, 125],
        [80, 155], [100, 160], [120, 155],
        [90, 185], [100, 190], [110, 185]
      ].map(([cx, cy], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="2.5"
          ry="3"
          fill="#FFD700"
          opacity="0.9"
        />
      ))}

      {/* Multiple highlight layers for 3D effect */}
      <ellipse cx="75" cy="75" rx="25" ry="32" fill="rgba(255,255,255,0.4)" />
      <ellipse cx="70" cy="70" rx="15" ry="20" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="65" cy="65" rx="8" ry="12" fill="rgba(255,255,255,0.8)" />

      {/* Bottom shine */}
      <ellipse cx="100" cy="185" rx="20" ry="15" fill="rgba(255,255,255,0.2)" />
    </motion.svg>
  );
};

/**
 * Enhanced Watermelon slice with vibrant colors
 */
export const WatermelonSlice = ({ size = 300 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="watermelon-shape"
      whileHover={{ scale: 1.05, rotate: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <defs>
        <linearGradient id="melonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3366" />
          <stop offset="50%" stopColor="#FF1744" />
          <stop offset="100%" stopColor="#D50000" />
        </linearGradient>
        <linearGradient id="rindGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#00C853" />
        </linearGradient>
        <linearGradient id="rindWhite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8F5E9" />
        </linearGradient>
        <filter id="melonShadow">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Outer green rind */}
      <path
        d="M 100 20 Q 30 90 100 160 Q 170 90 100 20 Z"
        fill="url(#rindGradient)"
        filter="url(#melonShadow)"
      />

      {/* White inner rind */}
      <path
        d="M 100 35 Q 40 95 100 145 Q 160 95 100 35 Z"
        fill="url(#rindWhite)"
      />

      {/* Pink/red flesh */}
      <path
        d="M 100 45 Q 50 95 100 135 Q 150 95 100 45 Z"
        fill="url(#melonGradient)"
      />

      {/* Seeds */}
      {[
        [80, 70], [100, 75], [120, 70],
        [85, 90], [115, 90],
        [75, 105], [100, 108], [125, 105],
        [90, 120], [110, 120]
      ].map(([cx, cy], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="3"
          ry="4"
          fill="#000000"
          opacity="0.9"
        />
      ))}

      {/* Highlights */}
      <ellipse cx="80" cy="65" rx="18" ry="25" fill="rgba(255,255,255,0.3)" />
      <ellipse cx="75" cy="60" rx="10" ry="15" fill="rgba(255,255,255,0.4)" />
    </motion.svg>
  );
};

/**
 * Enhanced Banana shape
 */
export const BananaShape = ({ size = 300 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 220 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="banana-shape"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <defs>
        <linearGradient id="bananaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="30%" stopColor="#FFD54F" />
          <stop offset="70%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>
        <linearGradient id="bananaShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF8F00" stopOpacity="0.5" />
        </linearGradient>
        <filter id="bananaDrop">
          <feDropShadow dx="0" dy="5" stdDeviation="8" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Shadow under banana */}
      <path
        d="M 35 80 Q 60 20 110 25 Q 160 30 185 75"
        stroke="url(#bananaShadow)"
        strokeWidth="28"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Main banana curve */}
      <path
        d="M 30 75 Q 55 15 105 20 Q 155 25 180 70"
        stroke="url(#bananaGradient)"
        strokeWidth="30"
        fill="none"
        strokeLinecap="round"
        filter="url(#bananaDrop)"
      />

      {/* Top highlight */}
      <path
        d="M 30 68 Q 55 22 105 27 Q 155 30 180 63"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />

      {/* Tip details */}
      <ellipse cx="28" cy="75" rx="8" ry="10" fill="#8B6914" opacity="0.7" />
      <ellipse cx="182" cy="70" rx="8" ry="10" fill="#8B6914" opacity="0.7" />

      {/* Subtle brown spots */}
      {[[60, 45], [95, 35], [130, 40], [150, 55]].map(([cx, cy], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="4"
          ry="3"
          fill="#8B6914"
          opacity="0.3"
        />
      ))}
    </motion.svg>
  );
};

/**
 * Premium Apple shape with glossy finish
 */
export const AppleShape = ({ size = 300 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="apple-shape"
      whileHover={{ scale: 1.05, rotate: 3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <defs>
        <radialGradient id="appleGradient" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="50%" stopColor="#FF1744" />
          <stop offset="100%" stopColor="#D50000" />
        </radialGradient>
        <linearGradient id="appleStem" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8D6E63" />
          <stop offset="100%" stopColor="#5D4037" />
        </linearGradient>
        <linearGradient id="appleLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <filter id="appleShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodOpacity="0.35"/>
        </filter>
      </defs>

      {/* Shadow/Outer glow */}
      <ellipse cx="100" cy="110" rx="65" ry="70" fill="#FF1744" opacity="0.2" filter="blur(10px)" />

      {/* Main body - two merged circles for apple shape */}
      <circle cx="82" cy="105" r="60" fill="url(#appleGradient)" filter="url(#appleShadow)" />
      <circle cx="118" cy="105" r="60" fill="url(#appleGradient)" filter="url(#appleShadow)" />

      {/* Top indent */}
      <ellipse cx="100" cy="50" rx="28" ry="35" fill="url(#appleGradient)" />

      {/* Stem */}
      <rect x="96" y="15" width="8" height="40" fill="url(#appleStem)" rx="3" filter="url(#appleShadow)" />

      {/* Leaf */}
      <ellipse
        cx="115"
        cy="32"
        rx="20"
        ry="12"
        fill="url(#appleLeaf)"
        transform="rotate(-25 115 32)"
        filter="url(#appleShadow)"
      />

      {/* Leaf vein */}
      <line x1="115" y1="26" x2="115" y2="38" stroke="#1B5E20" strokeWidth="1.5" opacity="0.6" />

      {/* Multiple highlight layers for glossy effect */}
      <ellipse cx="68" cy="75" rx="28" ry="35" fill="rgba(255,255,255,0.4)" />
      <ellipse cx="63" cy="70" rx="18" ry="25" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="60" cy="67" rx="10" ry="15" fill="rgba(255,255,255,0.7)" />

      {/* Bottom reflection */}
      <ellipse cx="100" cy="155" rx="20" ry="15" fill="rgba(255,255,255,0.15)" />
    </motion.svg>
  );
};
