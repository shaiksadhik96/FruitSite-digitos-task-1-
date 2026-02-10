import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  FloatingDot, 
  RotatingCircle, 
  WatermelonSlice, 
  StrawberryShape, 
  AppleShape,
  SparkleStarShape,
  ToyHeart
} from '../components/Doodles';
import { SmallDoodle, WavyDivider } from '../components/SectionDivider';
import './Pages.css';

/**
 * Team Page Component
 * Displays team members with smooth reveal animations
 */
export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Passionate about bringing fresh, healthy fruits to everyone.',
    },
    {
      name: 'Mike Chen',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Ensures timely delivery and optimal supply chain management.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Care Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Dedicated to providing exceptional customer service 24/7.',
    },
    {
      name: 'David Park',
      role: 'Quality Assurance',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Maintains our high quality standards for all fruits.',
    },
    {
      name: 'Jessica Martinez',
      role: 'Procurement Manager',
      image: 'https://images.unsplash.com/photo-1573497620166-aef748c8c792?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
      bio: 'Sources the finest fruits from trusted suppliers.',
    },
    {
      name: 'James Wilson',
      role: 'Logistics Coordinator',
      image: 'https://images.unsplash.com/photo-1715029005043-e88d219a3c48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
      bio: 'Manages fast and efficient delivery systems.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <section className="page-header page-header--team">
        <div className="header-decorations">
          <FloatingDot delay={0} x={10} y={25} size={12} color="pink" />
          <FloatingDot delay={0.5} x={85} y={20} size={13} color="green" />
          <FloatingDot delay={1} x={50} y={12} size={10} color="orange" />
          
          <RotatingCircle delay={0} x={15} y={65} size={45} color="#FF6B9D" />
          <RotatingCircle delay={2} x={82} y={68} size={40} color="#9D50FF" />

          <SparkleStarShape x={5} y={8} size={22} delay={0} />
          <SparkleStarShape x={92} y={82} size={24} delay={1.5} />

          <ToyHeart x={18} y={18} size={20} delay={0.7} />
          <ToyHeart x={78} y={25} size={18} delay={2} />

          <motion.div
            className="header-watermelon"
            animate={{
              rotate: [0, -12, 12, 0],
              y: [0, -18, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '15%',
              width: '130px',
            }}
          >
            <WatermelonSlice size={130} />
          </motion.div>

          <motion.div
            className="header-strawberry"
            animate={{
              x: [0, 15, 0],
              y: [0, -12, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
            style={{
              position: 'absolute',
              left: '8%',
              top: '40%',
              width: '95px',
            }}
          >
            <StrawberryShape size={95} />
          </motion.div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              title="Meet Our Team"
              subtitle="The passionate people bringing fresh fruits to your table"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="team-section">
        <div className="container">
          {/* Divider with doodle */}
          <SmallDoodle color="green" size="large" />

          <motion.div
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  boxShadow: '0 25px 60px rgba(255, 107, 157, 0.2)',
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <motion.div 
                  className="team-image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                    loading="lazy"
                  />
                  <motion.div 
                    className="team-overlay"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                  >
                    <div className="team-social">
                      <motion.a 
                        href="#" 
                        title="LinkedIn"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        in
                      </motion.a>
                      <motion.a 
                        href="#" 
                        title="Twitter"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        tw
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="values-section">
        <div className="container">
          {/* Divider */}
          <WavyDivider color="purple" height={65} />

          <SectionTitle title="Our Values" />

          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '🎯',
                title: 'Quality First',
                description: 'We never compromise on quality. Every fruit is carefully selected.',
              },
              {
                icon: '🤝',
                title: 'Customer Focus',
                description: 'Your satisfaction is our top priority. We listen and respond.',
              },
              {
                icon: '🌍',
                title: 'Sustainability',
                description: 'We care for our planet and support sustainable farming.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We continuously improve our services and user experience.',
              },
            ].map((value, i) => (
              <motion.div key={i} className="value-card" variants={itemVariants}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Join Our Growing Team</h2>
            <p>We are always looking for talented individuals who share our passion for fresh fruits and excellent service.</p>
            <motion.a
              href="mailto:careers@fruitshoppe.com"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Opportunities
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
