import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { 
  StrawberryShape, 
  OrangeShape, 
  FloatingDot, 
  RotatingCircle, 
  AppleShape, 
  WatermelonSlice, 
  BananaShape,
  SparkleStarShape,
  ToyHeart,
  BouncingBall
} from '../components/Doodles';
import { SectionDivider, SmallDoodle, WavyDivider } from '../components/SectionDivider';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import './Pages.css';

/**
 * Home Page Component
 * Hero section with animated text, introduction, and products showcase
 */
export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleHeroImageClick = () => {
    navigate('/products');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const heroTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const heroImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Futuristic Design */}
      <section className="hero-section hero-section--futuristic">
        <div className="futuristic-bg">
          <div className="grid-overlay"></div>
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
          <div className="scan-lines"></div>
        </div>

        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-text" variants={heroTextVariants}>
              <motion.div
                className="text-glow-wrapper"
                animate={{
                  textShadow: [
                    '0 0 12px rgba(255, 158, 184, 0.35)',
                    '0 0 24px rgba(255, 158, 184, 0.5)',
                    '0 0 12px rgba(255, 158, 184, 0.35)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.h1
                  variants={itemVariants}
                  className="hero-title"
                  style={{ marginBottom: '1.5rem' }}
                >
                  Welcome to <span className="gradient-text neon-text">FruitShoppe</span>
                </motion.h1>
              </motion.div>
              <motion.p 
                variants={itemVariants} 
                className="hero-subtitle futuristic-subtitle"
                style={{ marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem', maxWidth: '600px' }}
              >
                Experience the freshest, most delicious fruits delivered right to your doorstep.
                Premium quality, guaranteed freshness, and unbeatable prices.
              </motion.p>
              <motion.div
                className="hero-buttons"
                variants={containerVariants}
                style={{ gap: '1.5rem', marginBottom: '1rem' }}
              >
                <motion.a
                  href="/products"
                  className="btn btn-primary btn-lg btn-futuristic"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 0 30px rgba(255, 107, 157, 0.6), 0 0 60px rgba(255, 107, 157, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="btn-text">🛒 Shop Now</span>
                  <span className="btn-glow"></span>
                </motion.a>
                <motion.a
                  href="#featured"
                  className="btn btn-outline btn-lg btn-futuristic-outline"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    borderColor: '#FF6B9D',
                    boxShadow: '0 0 20px rgba(255, 107, 157, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="btn-text">🎯 Learn More</span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-image"
              variants={heroImageVariants}
              role="button"
              tabIndex={0}
              aria-label="View products"
              onClick={handleHeroImageClick}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleHeroImageClick();
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              {/* Enhanced creative doodles with toy-like elements - Optimized */}
              <FloatingDot delay={0} x={5} y={10} size={15} color="pink" />
              <FloatingDot delay={0.6} x={85} y={15} size={12} color="green" />
              <FloatingDot delay={1.2} x={90} y={50} size={9} color="purple" />
              
              <RotatingCircle delay={0} x={8} y={18} size={55} color="#FF6B9D" />

              {/* Sparkling stars and toy elements */}
              <SparkleStarShape x={2} y={5} size={25} delay={0} />
              <SparkleStarShape x={92} y={88} size={28} delay={1.5} />

              <ToyHeart x={18} y={12} size={20} delay={0.5} />

              <BouncingBall x={8} y={45} size={16} color="#FF6B9D" delay={0} />
              <BouncingBall x={88} y={40} size={14} color="#4ECDC4" delay={0.8} />

              {/* Main hero fruit - Premium Apple with futuristic effects */}
              <motion.div
                className="hero-fruit-wrapper"
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'relative',
                  zIndex: 10,
                  perspective: '1200px',
                }}
              >
                {/* Holographic glow layers - Optimized */}
                <motion.div
                  className="holographic-glow holographic-glow-1"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255, 107, 157, 0.5) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                    zIndex: -1,
                    willChange: 'opacity, transform',
                  }}
                />
                
                {/* Secondary holographic layer */}
                <motion.div
                  className="holographic-glow holographic-glow-2"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '450px',
                    height: '450px',
                    background: 'radial-gradient(circle, rgba(118, 75, 162, 0.35) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(25px)',
                    zIndex: -2,
                    willChange: 'opacity, transform',
                  }}
                />

                {/* Rotating particle ring - Optimized (single ring) */}
                <motion.div
                  className="particle-ring"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    height: '300px',
                    border: '2px solid rgba(255, 107, 157, 0.2)',
                    borderRadius: '50%',
                    zIndex: 5,
                    willChange: 'transform',
                  }}
                />

                {/* Main fruit - Real mixed fruits image with optimized effects */}
                <motion.img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop&q=90"
                  alt="Premium Fresh Fruits Collection"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'relative',
                    zIndex: 6,
                    width: '380px',
                    height: '380px',
                    objectFit: 'cover',
                    borderRadius: '30px',
                    border: '4px solid rgba(255, 107, 157, 0.3)',
                    boxShadow: '0 0 50px rgba(255, 107, 157, 0.5), inset 0 0 40px rgba(255, 107, 157, 0.2), 0 20px 60px rgba(255, 107, 157, 0.4)',
                    filter: 'drop-shadow(0 15px 40px rgba(255, 107, 157, 0.5)) brightness(1.1)',
                    willChange: 'transform',
                  }}
                />

                {/* Simplified sparkles - Optimized (removed heavy array animation) */}
                {[0, 2, 4, 6].map((i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    animate={{
                      x: [
                        Math.cos((i / 8) * Math.PI * 2) * 160,
                        Math.cos((i / 8) * Math.PI * 2) * 180,
                        Math.cos((i / 8) * Math.PI * 2) * 160,
                      ],
                      y: [
                        Math.sin((i / 8) * Math.PI * 2) * 160,
                        Math.sin((i / 8) * Math.PI * 2) * 180,
                        Math.sin((i / 8) * Math.PI * 2) * 160,
                      ],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '6px',
                      height: '6px',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
                      borderRadius: '50%',
                      zIndex: 3,
                      willChange: 'transform, opacity',
                    }}
                  />
                ))}
              </motion.div>

              {/* Surrounding fruit elements - Optimized (reduced to 2) */}
              <motion.div
                className="floating-orange"
                animate={{
                  x: [-10, 10, -10],
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 0.3,
                }}
                style={{
                  position: 'absolute',
                  right: '8%',
                  top: '15%',
                  width: '120px',
                  willChange: 'transform',
                }}
              >
                <OrangeShape size={120} />
              </motion.div>

              <motion.div
                className="floating-banana"
                animate={{
                  x: [0, 12, 0],
                  y: [0, -10, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 1.5,
                }}
                style={{
                  position: 'absolute',
                  right: '12%',
                  bottom: '25%',
                  width: '110px',
                  willChange: 'transform',
                }}
              >
                <BananaShape size={110} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          {/* Section divider */}
          <SectionDivider color="orange" dots={true} />

          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Get your fruits within 24 hours',
                color: '#FF6B9D',
              },
              {
                icon: '✨',
                title: 'Premium Quality',
                description: 'Handpicked fresh fruits daily',
                color: '#FFB84D',
              },
              {
                icon: '💳',
                title: 'Secure Payment',
                description: 'Safe and encrypted transactions',
                color: '#4ECDC4',
              },
              {
                icon: '❤️',
                title: 'Customer Care',
                description: 'We care about your satisfaction',
                color: '#FF6B9D',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${feature.color}40`,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  className="feature-icon"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <motion.div
                  className="feature-decoration"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: `radial-gradient(circle, ${feature.color}20, transparent)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="featured-section">
        <div className="container">
          {/* Wavy divider */}
          <WavyDivider color="red" height={70} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '3rem' }}
          >
            <SectionTitle
              title="✨ Our Premium Collection"
              subtitle="Experience the finest selection of 5 exceptional fruits"
            />
          </motion.div>

          <motion.div
            className="products-grid grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {MOCK_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -20,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${product.name}`}
                onClick={handleHeroImageClick}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handleHeroImageClick();
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4rem',
              padding: '3rem 2rem',
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 157, 0.2)',
              animation: 'borderGlow 3s ease-in-out infinite',
            }}
          >
            <motion.a 
              href="/products" 
              className="btn btn-primary btn-lg btn-futuristic"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 20px 50px rgba(255, 107, 157, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              🎯 Explore Full Collection
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          {/* Divider with doodle line */}
          <SmallDoodle color="yellow" size="medium" />

          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div 
              className="about-text" 
              variants={itemVariants}
              whileInView={{
                x: [0, 0],
                opacity: 1,
              }}
              style={{
                paddingRight: '2rem',
              }}
            >
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #FF6B9D 0%, #FFB84D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                🍎 About FruitShoppe
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  color: 'var(--dark-gray)',
                }}
              >
                Founded in 2024, FruitShoppe is dedicated to bringing the freshest, most
                delicious fruits directly to your table. We work with local farmers and
                suppliers to ensure every fruit is of the highest quality.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginBottom: '2rem',
                  color: 'var(--dark-gray)',
                }}
              >
                Our mission is simple: to make healthy eating convenient, affordable, and
                delicious. We believe that fresh fruit should be accessible to everyone, and
                we're committed to making that a reality.
              </motion.p>
              <motion.ul 
                className="about-list"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginTop: '2rem',
                }}
              >
                {[
                  '✓ 100% Fresh Guarantee',
                  '✓ Organic Options Available',
                  '✓ Free Delivery on Orders Over $50',
                  '✓ 30-Day Money Back Guarantee'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 10,
                      color: '#FF6B9D',
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      fontSize: '1rem',
                      color: 'var(--dark-gray)',
                      padding: '0.7rem 1rem',
                      background: 'rgba(255, 107, 157, 0.08)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 107, 157, 0.15)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div 
              className="about-image" 
              variants={itemVariants}
              role="button"
              tabIndex={0}
              aria-label="View products"
              onClick={handleHeroImageClick}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleHeroImageClick();
                }
              }}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              {/* Floating doodles around image with enhanced animations */}
              <motion.div
                className="about-decoration apple"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  left: '-50px',
                  top: '-30px',
                  width: '100px',
                  zIndex: 10,
                }}
              >
                <AppleShape size={100} />
              </motion.div>
              <motion.div
                className="about-decoration watermelon"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 0.7,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  right: '-50px',
                  bottom: '30px',
                  width: '110px',
                  zIndex: 10,
                }}
              >
                <WatermelonSlice size={110} />
              </motion.div>
              <motion.div
                className="about-decoration orange"
                animate={{
                  x: [0, -15, 0],
                  y: [0, 12, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  delay: 1.2,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  left: '-35px',
                  bottom: '-40px',
                  width: '90px',
                  zIndex: 10,
                }}
              >
                <OrangeShape size={90} />
              </motion.div>
              
              {/* Sparkling effects around image */}
              <SparkleStarShape x={-5} y={10} size={20} delay={0} />
              <SparkleStarShape x={95} y={15} size={18} delay={1.5} />
              <SparkleStarShape x={5} y={85} size={22} delay={2.5} />
              
              <motion.img
                src="https://images.unsplash.com/photo-1616060048857-306f086aa1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBzaG9wfGVufDB8fDB8fHww"
                alt="Fresh Fruits"
                loading="lazy"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)',
                }}
                transition={{ duration: 0.4 }}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
