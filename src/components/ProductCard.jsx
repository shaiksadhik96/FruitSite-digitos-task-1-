import { motion } from 'framer-motion';
import './ProductCard.css';

/**
 * Product Card Component
 * Individual product display with hover animations
 */
export default function ProductCard({ product, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.4,
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="product-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="product-image-wrapper">
        <motion.img
          src={product.image}
          alt={product.name}
          className="product-image"
          variants={imageVariants}
          loading="lazy"
        />
        {!product.inStock && (
          <div className="out-of-stock-badge">Out of Stock</div>
        )}
        {product.inStock && (
          <motion.div
            className="stock-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            In Stock
          </motion.div>
        )}
      </div>

      <div className="product-details">
        <div className="product-category">
          {product.category}
        </div>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
