import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
  FloatingDot, 
  RotatingCircle, 
  StrawberryShape, 
  OrangeShape, 
  BananaShape,
  SparkleStarShape,
  BouncingBall
} from '../components/Doodles';
import { SmallDoodle } from '../components/SectionDivider';
import './Checkout.css';

/**
 * Checkout Page Component
 * Form validation and mock payment processing
 */
export default function Checkout() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const sanitizedCardNumber = formData.cardNumber.replace(/\D/g, '');

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = 'Valid phone number (10 digits) is required';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!sanitizedCardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Valid card number (16 digits) is required';
    }
    if (!formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiryDate = 'Valid expiry date (MM/YY) is required';
    }
    if (!formData.cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'Valid CVV (3 digits) is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue = name === 'cardNumber'
      ? value.replace(/\D/g, '').slice(0, 16)
      : value;
    setFormData(prev => ({ ...prev, [name]: nextValue }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
      <section className="checkout-section checkout-section--enhanced">
        <div className="checkout-decorations">
          <FloatingDot delay={0} x={5} y={30} size={11} color="pink" />
          <FloatingDot delay={0.4} x={90} y={25} size={12} color="orange" />
          <FloatingDot delay={0.8} x={50} y={15} size={9} color="green" />
          
          <RotatingCircle delay={0} x={80} y={70} size={42} color="#FF6B9D" />
          <RotatingCircle delay={1.2} x={15} y={65} size={38} color="#4ECDC4" />

          <SparkleStarShape x={8} y={18} size={20} delay={0} />
          <SparkleStarShape x={88} y={75} size={22} delay={1.5} />

          <BouncingBall x={12} y={45} size={14} color="#FFB84D" delay={0.5} />
          <BouncingBall x={85} y={40} size={13} color="#9D50FF" delay={1.3} />

          <motion.div
            className="checkout-strawberry"
            animate={{
              scale: [1, 1.08, 1],
              y: [0, -15, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: '3%',
              bottom: '20%',
              width: '100px',
            }}
          >
            <StrawberryShape size={100} />
          </motion.div>

          <motion.div
            className="checkout-orange"
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
              rotate: [0, -4, 4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
            style={{
              position: 'absolute',
              right: '5%',
              top: '25%',
              width: '85px',
            }}
          >
            <OrangeShape size={85} />
          </motion.div>

          <motion.div
            className="checkout-banana"
            animate={{
              x: [0, -12, 0],
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.2,
            }}
            style={{
              position: 'absolute',
              right: '8%',
              bottom: '30%',
              width: '95px',
            }}
          >
            <BananaShape size={95} />
          </motion.div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              title="Secure Checkout"
              subtitle="Complete your order with confidence"
            />
          </motion.div>

          <motion.div
            className="checkout-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Order Summary */}
            <motion.div className="order-summary" variants={itemVariants}>
              <h3>Order Summary</h3>
              <div className="summary-item">
                <span>Subtotal:</span>
                <span>$45.00</span>
              </div>
              <div className="summary-item">
                <span>Shipping:</span>
                <span>$5.00</span>
              </div>
              <div className="summary-item">
                <span>Tax:</span>
                <span>$4.00</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span>$54.00</span>
              </div>
            </motion.div>

            {/* Checkout Form */}
            {/* Divider */}
            <SmallDoodle color="orange" size="large" />

            <motion.form
              className="checkout-form"
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Personal Information */}
              <fieldset>
                <legend>Personal Information</legend>
                <motion.div className="form-row" variants={itemVariants}>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && (
                      <span className="error-message">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && (
                      <span className="error-message">{errors.lastName}</span>
                    )}
                  </div>
                </motion.div>

                <motion.div className="form-row" variants={itemVariants}>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>
                </motion.div>

                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="address">Delivery Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? 'error' : ''}
                    rows={3}
                  />
                  {errors.address && (
                    <span className="error-message">{errors.address}</span>
                  )}
                </motion.div>
              </fieldset>

              {/* Payment Information */}
              <fieldset>
                <legend>Payment Information</legend>
                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input
                    type="tel"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234567890123456"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className={errors.cardNumber ? 'error' : ''}
                  />
                  {errors.cardNumber && (
                    <span className="error-message">{errors.cardNumber}</span>
                  )}
                </motion.div>

                <motion.div className="form-row" variants={itemVariants}>
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date *</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className={errors.expiryDate ? 'error' : ''}
                    />
                    {errors.expiryDate && (
                      <span className="error-message">{errors.expiryDate}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV *</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      maxLength={3}
                      value={formData.cvv}
                      onChange={handleChange}
                      className={errors.cvv ? 'error' : ''}
                    />
                    {errors.cvv && (
                      <span className="error-message">{errors.cvv}</span>
                    )}
                  </div>
                </motion.div>
              </fieldset>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="btn btn-primary btn-lg submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ⏳
                      </motion.span>
                      {' '}Processing Payment...
                    </>
                  ) : (
                    'Complete Purchase'
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
