import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink-black via-purple-glow/20 to-neon-blue/20"
    >
      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* 标题 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
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
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-gradient-to-r from-neon-blue to-purple-glow text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">开始探索</span>
          </button>

          {/* 了解产品功能按钮 */}
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-transparent border-2 border-gold-brown text-gold-brown font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-gold-brown/10 hover:scale-105"
          >
            <span className="relative z-10">了解产品功能</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;