import React from 'react';
import { motion } from 'framer-motion';

const InstitutionSection = () => {
  return (
    <section id="institution" className="section">
      <div className="container">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2>开发团队</h2>
          <p>项目的开发机构和声明</p>
        </motion.div>

        {/* 机构信息卡片 */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          {/* 机构 logo */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
            style={{
              width: '150px',
              height: '150px',
              margin: '0 auto 2rem',
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.3), 0 10px 10px -5px rgba(99, 102, 241, 0.1)',
            }}
          >
            <span style={{ fontSize: '5rem', fontWeight: 'bold', color: 'white' }}>🏫</span>
          </motion.div>

          {/* 机构名称 */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1.5rem', fontSize: '2rem' }}
          >
            浙江工商大学计算机科学与技术学院
          </motion.h3>

          {/* 机构描述 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.8' }}
          >
            浙江工商大学计算机科学与技术学院是浙江省重点建设的计算机学院之一，
            致力于培养具有创新精神和实践能力的高级计算机专业人才。
            学院拥有一支高水平的师资队伍，在计算机科学与技术、软件工程、人工智能等领域开展前沿研究。
          </motion.p>

          {/* 分隔线 */}
          <div style={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }}></div>

          {/* 声明文本 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              padding: '2rem',
              background: 'rgba(99, 102, 241, 0.05)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border-color)',
              textAlign: 'left'
            }}
          >
            <h4 style={{ marginBottom: '1rem', textAlign: 'center' }}>声明文本</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {[
                '本项目是浙江工商大学计算机科学与技术学院的教学科研项目',
                '项目旨在探索现代Web技术在实际应用中的创新实践',
                '所有代码和资源仅供学习和研究使用',
                '未经许可，不得用于商业用途',
                '项目遵循开源协议，欢迎社区贡献和反馈',
                '感谢所有参与项目开发和支持的人员'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}
                >
                  <span style={{ 
                    fontSize: '1.25rem', 
                    marginTop: '0.25rem',
                    color: 'var(--primary-color)'
                  }}>•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 底部装饰 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            style={{
              marginTop: '2rem',
              fontSize: '3rem',
              opacity: 0.1
            }}
          >
            🎓
          </motion.div>
        </motion.div>

        {/* 页脚信息 */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            padding: '2rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}
        >
          <p>© 2025 浙江工商大学计算机科学与技术学院. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default InstitutionSection;