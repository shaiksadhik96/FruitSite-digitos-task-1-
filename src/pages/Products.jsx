import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { 
  FloatingDot, 
  RotatingCircle, 
  AppleShape, 
  StrawberryShape, 
  OrangeShape,
  SparkleStarShape,
  BouncingBall
} from '../components/Doodles';
import { WavyDivider } from '../components/SectionDivider';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import './Pages.css';

/**
 * Products Page Component
 * Displays all products with filtering capabilities
 */
export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(MOCK_PRODUCTS);
    } else {
      setFilteredProducts(MOCK_PRODUCTS.filter(p => p.category === category));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
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
      <section className="page-header page-header--products">
        <div className="header-decorations">
          <FloatingDot delay={0} x={10} y={15} size={12} color="pink" />
          <FloatingDot delay={0.4} x={85} y={10} size={14} color="orange" />
          <FloatingDot delay={0.8} x={50} y={8} size={10} color="green" />
          <FloatingDot delay={1.2} x={15} y={80} size={11} color="blue" />
          
          <RotatingCircle delay={0} x={18} y={65} size={45} color="#FF6B9D" />
          <RotatingCircle delay={1.5} x={82} y={70} size={38} color="#4ECDC4" />

          <SparkleStarShape x={5} y={5} size={22} delay={0} />
          <SparkleStarShape x={90} y={85} size={20} delay={1.5} />

          <BouncingBall x={25} y={20} size={14} color="#FFB84D" delay={0.5} />
          <BouncingBall x={75} y={15} size={12} color="#FF6B9D" delay={1.2} />

          <motion.div
            className="header-apple"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              right: '12%',
              top: '45%',
              width: '120px',
            }}
          >
            <AppleShape size={120} />
          </motion.div>

          <motion.div
            className="header-strawberry"
            animate={{
              x: [0, 15, 0],
              y: [0, -12, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            style={{
              position: 'absolute',
              left: '8%',
              top: '55%',
              width: '100px',
            }}
          >
            <StrawberryShape size={100} />
          </motion.div>

          <motion.div
            className="header-orange"
            animate={{
              x: [0, -10, 0],
              y: [0, 15, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            style={{
              position: 'absolute',
              right: '8%',
              bottom: '15%',
              width: '90px',
            }}
          >
            <OrangeShape size={90} />
          </motion.div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              title="Premium Fruit Collection"
              subtitle="Discover our exclusive selection of 5 finest fruits"
            />
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          {/* Divider line */}
          <WavyDivider color="orange" height={60} />

          <motion.div
            className="filter-buttons"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryFilter(category)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          <p className="products-count">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <motion.div
            className="products-grid grid grid-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <motion.div
              className="no-products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ 
                textAlign: 'center', 
                padding: '60px 20px',
                fontSize: '1.2rem',
                color: '#666'
              }}
            >
              <p>No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="products-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <SparkleStarShape x={10} y={15} size={25} delay={0} />
            <SparkleStarShape x={85} y={20} size={22} delay={1} />
            
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Order?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Start shopping and enjoy fresh fruits delivered to your door
            </motion.p>
            <motion.a
              href="/checkout"
              className="btn btn-primary btn-lg"
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 15px 40px rgba(255, 107, 157, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Go to Checkout
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
