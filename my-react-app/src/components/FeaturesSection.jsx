import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('feature1');
  const [activeCarousel, setActiveCarousel] = useState(0);

  // 标签内容数据
  const tabContent = {
    feature1: {
      title: '核心功能一',
      description: '这是我们项目的第一个核心功能，具有强大的性能和易用的界面。',
      icon: '⚡',
      details: [
        '高性能设计，支持大规模数据处理',
        '直观的用户界面，降低学习成本',
        '灵活的配置选项，适应不同场景需求',
        '完善的文档支持，便于开发者集成'
      ]
    },
    feature2: {
      title: '核心功能二',
      description: '第二个核心功能专注于用户体验和交互设计，提供流畅的操作感受。',
      icon: '🎨',
      details: [
        '现代化的UI设计，符合最新设计趋势',
        '流畅的动画效果，提升用户体验',
        '响应式设计，适配各种设备尺寸',
        '无障碍支持，确保所有用户都能使用'
      ]
    },
    feature3: {
      title: '核心功能三',
      description: '第三个核心功能提供了强大的扩展能力和集成选项。',
      icon: '🔌',
      details: [
        '丰富的API接口，便于第三方集成',
        '支持插件扩展，功能可按需定制',
        '与主流服务无缝集成',
        '开放的开发平台，鼓励社区贡献'
      ]
    }
  };

  // 轮播内容数据
  const carouselItems = [
    {
      title: '功能演示一',
      description: '这是第一个功能的详细演示，展示了其主要特性和使用方法。',
      bgColor: 'rgba(99, 102, 241, 0.1)',
      icon: '📊'
    },
    {
      title: '功能演示二',
      description: '第二个功能的演示，重点展示了其独特的设计和交互方式。',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      icon: '🎮'
    },
    {
      title: '功能演示三',
      description: '第三个功能的演示，展示了其在实际场景中的应用效果。',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      icon: '🚀'
    }
  ];

  // 处理轮播切换
  const handleCarouselChange = (index) => {
    setActiveCarousel(index);
  };

  return (
    <section id="features" className="section">
      <div className="container">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2>功能演示</h2>
          <p>探索我们项目的核心功能和特性</p>
        </motion.div>

        {/* 标签切换展示 */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          {/* 标签按钮 */}
          <div className="tabs">
            {Object.keys(tabContent).map((key, index) => (
              <motion.button
                key={key}
                className={`tab-button ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tabContent[key].title}
              </motion.button>
            ))}
          </div>

          {/* 标签内容 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
              {tabContent[activeTab].icon}
            </div>
            <h3>{tabContent[activeTab].title}</h3>
            <p style={{ marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              {tabContent[activeTab].description}
            </p>
            
            {/* 特性列表 */}
            <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {tabContent[activeTab].details.map((detail, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  style={{ padding: '1.5rem', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</div>
                  <p style={{ marginBottom: 0, fontSize: '1rem' }}>{detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 功能展示型切换组件 */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>功能展示</h3>
          
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
            {/* 轮播内容 */}
            <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${activeCarousel * 100}%)` }}>
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: '100%',
                    padding: '3rem',
                    background: item.bgColor,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: '6rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p style={{ maxWidth: '600px', margin: '1rem auto 0' }}>{item.description}</p>
                </div>
              ))}
            </div>

            {/* 轮播指示器 */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', position: 'absolute', bottom: '1rem', left: 0, right: 0 }}>
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCarouselChange(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === activeCarousel ? '#6366f1' : 'rgba(99, 102, 241, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`切换到演示 ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;