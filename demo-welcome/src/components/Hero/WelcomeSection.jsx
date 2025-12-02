import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaInfoCircle } from 'react-icons/fa';

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink-black via-purple-glow/20 to-neon-blue/20"
    >
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 左侧古籍纹理效果 */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold-brown/5 to-transparent opacity-30 mix-blend-overlay animate-float"></div>
        {/* 右侧古籍纹理效果 */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-brown/5 to-transparent opacity-30 mix-blend-overlay animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* 3D Blob 效果 */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-neon-blue/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-glow/10 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gold-brown/10 blur-2xl"
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        ></motion.div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* 标题 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold-brown via-white to-neon-blue"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          BiograFi｜传记快线
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          面向历史人物研究的下一代智能标注平台
        </motion.p>

        {/* 描述文本 */}
        <motion.p
          className="text-base md:text-lg mb-12 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          融合古籍研究方法与人工智能技术，为传记学、历史学、人文学研究提供更高效的文献处理体验。
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          {/* 开始探索按钮 */}
          <button
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-gradient-to-r from-neon-blue to-purple-glow text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              开始探索 <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>

          {/* 了解产品功能按钮 */}
          <button
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-transparent border-2 border-gold-brown text-gold-brown font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-gold-brown/10 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              了解产品功能 <FaInfoCircle className="group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </button>
        </motion.div>

        {/* 向下滚动指示器 */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
        >
          <FaArrowDown className="text-2xl text-gold-brown/70" />
        </motion.div>

        {/* 漂浮的书卷元素 */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-gold-brown/10 rounded-lg border border-gold-brown/30 rotate-12"
          animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gold-brown/10 rounded-lg border border-gold-brown/30 -rotate-6"
          animate={{ y: [0, 20, 0], rotate: [-6, -10, -6] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;