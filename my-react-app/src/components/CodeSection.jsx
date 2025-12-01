import React from 'react';
import { motion } from 'framer-motion';

const CodeSection = () => {
  // 代码示例数据
  const codeExamples = [
    {
      title: 'React 组件示例',
      language: 'jsx',
      code: `import React, { useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="example">
      <h2>计数器示例</h2>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加计数
      </button>
    </div>
  );
};

export default ExampleComponent;`
    },
    {
      title: 'CSS 动画示例',
      language: 'css',
      code: `.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}`
    },
    {
      title: 'JavaScript 工具函数',
      language: 'javascript',
      code: `// 防抖函数
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// 节流函数
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};`
    }
  ];

  return (
    <section id="code" className="section">
      <div className="container">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2>代码示例</h2>
          <p>查看我们项目的核心代码实现和技术栈</p>
        </motion.div>

        {/* 视频展示区域 */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <h3>功能演示视频</h3>
          <p style={{ marginBottom: '2rem' }}>以下是我们项目的核心功能演示视频</p>
          
          {/* 视频占位符，实际项目中替换为真实视频 */}
          <div
            style={{
              width: '100%',
              maxWidth: '800px',
              height: '450px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(30, 41, 59, 0.8))',
              borderRadius: 'var(--radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* 播放按钮 */}
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
            >
              <span style={{ fontSize: '2rem', marginLeft: '5px' }}>▶</span>
            </div>
            
            {/* 装饰性动画 */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            点击播放按钮查看完整功能演示
          </p>
        </motion.div>

        {/* 代码示例卡片 */}
        <div className="grid grid-2" style={{ gap: '2rem' }}>
          {codeExamples.map((example, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 style={{ marginBottom: '1rem' }}>{example.title}</h3>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '12px', 
                  background: 'rgba(99, 102, 241, 0.2)', 
                  color: '#6366f1', 
                  fontSize: '0.8rem', 
                  fontWeight: '600' 
                }}>
                  {example.language}
                </span>
              </div>
              <div className="code-block">
                <pre style={{ margin: 0, color: '#e2e8f0', overflow: 'auto' }}>
                  <code>{example.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SVG + CSS 动画示例 */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <h3>SVG 动画示例</h3>
          <p style={{ marginBottom: '2rem' }}>使用 SVG 和 CSS 实现的动态图形效果</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {/* SVG 动画 1: 旋转的齿轮 */}
            <div className="float" style={{ width: '200px', height: '200px' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gearGradient)" strokeWidth="3" />
                <g className="gear-teeth" style={{ animation: 'rotate 5s linear infinite' }}>
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 50 + Math.cos(angle) * 40;
                    const y1 = 50 + Math.sin(angle) * 40;
                    const x2 = 50 + Math.cos(angle) * 55;
                    const y2 = 50 + Math.sin(angle) * 55;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#gearGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
                <circle cx="50" cy="50" r="15" fill="url(#gearGradient)" />
              </svg>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>旋转齿轮动画</p>
            </div>

            {/* SVG 动画 2: 脉动的圆环 */}
            <div className="float" style={{ width: '200px', height: '200px' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#pulseGradient)" strokeWidth="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="url(#pulseGradient)" strokeWidth="2" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                <circle cx="50" cy="50" r="20" fill="none" stroke="url(#pulseGradient)" strokeWidth="2" style={{ animation: 'pulse 2s ease-in-out infinite 0.5s' }} />
                <circle cx="50" cy="50" r="10" fill="url(#pulseGradient)" />
              </svg>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>脉动圆环动画</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeSection;