import { motion } from 'framer-motion';
import './LoadingSpinner.css';

/**
 * Loading Spinner Component
 * Displays while pages are being loaded
 */
export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading delicious fruits...
      </motion.p>
    </div>
  );
}
