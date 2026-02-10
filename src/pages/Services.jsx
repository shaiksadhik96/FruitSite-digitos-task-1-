import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  FloatingDot, 
  RotatingCircle, 
  BananaShape, 
  OrangeShape, 
  AppleShape,
  SparkleStarShape,
  BouncingBall
} from '../components/Doodles';
import { SectionDivider } from '../components/SectionDivider';
import './Pages.css';

/**
 * Services Page Component
 * Describes delivery, freshness guarantee, and customer care services
 */
export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your fresh fruits within 24 hours. We understand that freshness is key, so we ensure prompt delivery to your doorstep.',
      features: ['Same-day delivery in metro cities', '24-hour delivery guarantee', 'Free delivery on orders over $50'],
    },
    {
      icon: '✨',
      title: 'Freshness Guarantee',
      description: 'Every fruit is carefully selected and quality-checked. If you receive any fruit that does not meet our high standards, we will replace it immediately.',
      features: ['Handpicked daily', '100% freshness promise', '30-day money-back guarantee'],
    },
    {
      icon: '💬',
      title: 'Customer Support',
      description: 'Our dedicated customer care team is available 24/7 to help you with any questions or concerns about your order.',
      features: ['24/7 customer support', 'Multiple contact channels', 'Quick response time'],
    },
    {
      icon: '🌱',
      title: 'Organic Options',
      description: 'We offer a wide range of certified organic fruits, sourced directly from organic farms to ensure quality and sustainability.',
      features: ['Certified organic produce', 'Sustainable farming', 'Support local farmers'],
    },
  ];

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

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <section className="page-header page-header--services">
        <div className="header-decorations">
          <FloatingDot delay={0} x={15} y={20} size={13} color="orange" />
          <FloatingDot delay={0.5} x={80} y={15} size={11} color="pink" />
          <FloatingDot delay={1} x={50} y={10} size={10} color="green" />
          
          <RotatingCircle delay={0} x={75} y={65} size={50} color="#FFB84D" />
          <RotatingCircle delay={1.5} x={20} y={70} size={42} color="#4ECDC4" />

          <SparkleStarShape x={8} y={12} size={24} delay={0} />
          <SparkleStarShape x={88} y={78} size={20} delay={1.8} />

          <BouncingBall x={12} y={50} size={15} color="#FF6B9D" delay={0.3} />
          <BouncingBall x={85} y={35} size={13} color="#4ECDC4" delay={1.2} />

          <motion.div
            className="header-banana"
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '10%',
              width: '140px',
            }}
          >
            <BananaShape size={140} />
          </motion.div>

          <motion.div
            className="header-orange"
            animate={{
              x: [0, -15, 0],
              y: [0, 12, 0],
              rotate: [0, -4, 4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            style={{
              position: 'absolute',
              right: '8%',
              top: '35%',
              width: '100px',
            }}
          >
            <OrangeShape size={100} />
          </motion.div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              title="Premium Services"
              subtitle="Experience exceptional quality and care with every order"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          {/* Divider */}
          <SectionDivider color="yellow" dots={true} />

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
                  transition: { type: 'spring', stiffness: 300 }
                }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  className="service-icon"
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      ✓ {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="service-decoration"
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    width: '120px',
                    height: '120px',
                    background: `radial-gradient(circle, ${['#FF6B9D', '#FFB84D', '#4ECDC4', '#9D50FF'][index]}20, transparent)`,
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
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="quality-section">
        <div className="container">
          <SectionTitle title="Our Quality Standards" />

          <motion.div
            className="quality-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Source Selection',
                description:
                  'We partner with trusted local and international farmers who share our commitment to quality and sustainability.',
              },
              {
                title: 'Quality Inspection',
                description:
                  'Every batch of fruits undergoes rigorous quality checks to ensure they meet our high standards.',
              },
              {
                title: 'Proper Storage',
                description:
                  'We maintain optimal storage conditions to preserve the freshness and nutritional value of fruits.',
              },
              {
                title: 'Safe Packaging',
                description:
                  'Fruits are packed with care in eco-friendly packaging to ensure they arrive fresh and damage-free.',
              },
            ].map((standard, i) => (
              <motion.div key={i} className="quality-card" variants={itemVariants}>
                <div className="quality-number">{i + 1}</div>
                <h4>{standard.title}</h4>
                <p>{standard.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Experience Premium Fruit Shopping</h2>
            <p>Join thousands of satisfied customers who trust FruitShoppe for fresh, quality fruits</p>
            <motion.a
              href="/products"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
