import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="section welcome-section">
      <div className="container">
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', zIndex: 1, position: 'relative' }}
        >
          {/* Logo */}
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.5 }}
            style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 2rem',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.3), 0 10px 10px -5px rgba(99, 102, 241, 0.1)',
            }}
          >
            <span style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>🚀</span>
          </motion.div>

          {/* 标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ marginBottom: '1rem' }}
          >
            欢迎来到我们的项目
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}
          >
            一个基于现代Web技术构建的创新项目，
            融合了华丽的视觉效果和流畅的用户体验
          </motion.p>

          {/* 行动按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button className="btn btn-primary">
              开始探索
            </button>
            <button className="btn btn-secondary">
              了解更多
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* 装饰性元素 */}
      <motion.div
        className="float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default WelcomeSection;