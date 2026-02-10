import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FloatingDot, 
  OrangeShape, 
  StrawberryShape, 
  BananaShape, 
  WatermelonSlice, 
  AppleShape,
  SparkleStarShape,
  ToyHeart,
  BouncingBall
} from '../components/Doodles';
import './Pages.css';

/**
 * Thank You Page Component
 * Displayed after successful checkout with animated success message
 */
export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const confettiVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
    animate: {
      y: [0, -20, -40],
      opacity: [1, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 0,
      },
    },
  };

  return (
    <motion.div
      className="page-container thank-you-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="thank-you-section thank-you-section--enhanced">
        {/* Background decorations */}
        <div className="thank-you-decorations">
          <FloatingDot delay={0} x={5} y={15} size={14} color="pink" />
          <FloatingDot delay={0.3} x={90} y={20} size={12} color="orange" />
          <FloatingDot delay={0.6} x={15} y={80} size={11} color="green" />
          <FloatingDot delay={0.9} x={85} y={75} size={13} color="blue" />
          <FloatingDot delay={1.2} x={50} y={10} size={10} color="purple" />
          <FloatingDot delay={1.5} x={45} y={85} size={12} color="pink" />

          <SparkleStarShape x={10} y={8} size={30} delay={0} />
          <SparkleStarShape x={85} y={12} size={28} delay={0.8} />
          <SparkleStarShape x={15} y={90} size={25} delay={1.5} />
          <SparkleStarShape x={88} y={85} size={27} delay={2.2} />

          <ToyHeart x={20} y={20} size={24} delay={0.5} />
          <ToyHeart x={75} y={25} size={22} delay={1.8} />
          <ToyHeart x={25} y={75} size={20} delay={2.5} />

          <BouncingBall x={8} y={50} size={16} color="#FF6B9D" delay={0} />
          <BouncingBall x={88} y={45} size={15} color="#4ECDC4" delay={0.7} />
          <BouncingBall x={50} y={18} size={14} color="#FFB84D" delay={1.4} />
          
          <motion.div
            className="thank-you-orange"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 8, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: '3%',
              top: '30%',
              width: '150px',
            }}
          >
            <OrangeShape size={150} />
          </motion.div>

          <motion.div
            className="thank-you-strawberry"
            animate={{
              x: [0, 25, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '25%',
              width: '120px',
            }}
          >
            <StrawberryShape size={120} />
          </motion.div>

          <motion.div
            className="thank-you-banana"
            animate={{
              x: [0, -18, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            style={{
              position: 'absolute',
              left: '10%',
              bottom: '10%',
              width: '110px',
            }}
          >
            <BananaShape size={110} />
          </motion.div>

          <motion.div
            className="thank-you-watermelon"
            animate={{
              rotate: [0, -18, 18, 0],
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
            style={{
              position: 'absolute',
              right: '8%',
              top: '15%',
              width: '110px',
            }}
          >
            <WatermelonSlice size={110} />
          </motion.div>

          <motion.div
            className="thank-you-apple"
            animate={{
              y: [0, 15, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 0.8,
            }}
            style={{
              position: 'absolute',
              right: '15%',
              bottom: '40%',
              width: '90px',
            }}
          >
            <AppleShape size={90} />
          </motion.div>
        </div>

        <div className="container">
          {/* Confetti Animation */}
          <motion.div
            className="confetti"
            variants={confettiVariants}
            initial="hidden"
            animate={["visible", "animate"]}
          >
            🎉
          </motion.div>
          <motion.div
            className="confetti"
            style={{ left: '20%' }}
            variants={confettiVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            transition={{ delay: 0.2 }}
          >
            🍎
          </motion.div>
          <motion.div
            className="confetti"
            style={{ right: '20%' }}
            variants={confettiVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            transition={{ delay: 0.4 }}
          >
            🌟
          </motion.div>

          {/* Success Message */}
          <motion.div
            className="thank-you-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="success-checkmark"
              variants={itemVariants}
            >
              <motion.svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="60" r="55" stroke="url(#gradient)" strokeWidth="3" />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="var(--primary-orange)" />
                    <stop offset="100%" stopColor="var(--primary-red)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 40 60 L 55 75 L 85 45"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </motion.svg>
            </motion.div>

            <motion.h1 variants={itemVariants} className="thank-you-title">
              Order Confirmed! 🎉
            </motion.h1>

            <motion.p variants={itemVariants} className="thank-you-subtitle">
              Thank you for your purchase! Your fresh fruits will be delivered within 24 hours.
            </motion.p>

            <motion.div
              className="order-details"
              variants={itemVariants}
            >
              <div className="detail-item">
                <span className="detail-label">Order Number:</span>
                <span className="detail-value">#FRU2024001</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Estimated Delivery:</span>
                <span className="detail-value">Within 24 hours</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Amount:</span>
                <span className="detail-value">$54.00</span>
              </div>
            </motion.div>

            <motion.div
              className="thank-you-message"
              variants={itemVariants}
            >
              <h3>What's Next?</h3>
              <ul>
                <li>✓ You will receive a confirmation email shortly</li>
                <li>✓ Track your order status in real-time</li>
                <li>✓ Our team will prepare your fruits with care</li>
                <li>✓ Enjoy your fresh, delicious fruits!</li>
              </ul>
            </motion.div>

            <motion.div
              className="thank-you-buttons"
              variants={itemVariants}
            >
              <Link
                to="/"
                className="btn btn-primary btn-lg"
              >
                Back to Home
              </Link>
              <Link
                to="/products"
                className="btn btn-outline btn-lg"
              >
                Continue Shopping
              </Link>
            </motion.div>

            <motion.p variants={itemVariants} className="thank-you-footer">
              Need help? Contact us at <a href="mailto:support@fruitshoppe.com">support@fruitshoppe.com</a> or call <a href="tel:+1234567890">+1 (234) 567-890</a>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
