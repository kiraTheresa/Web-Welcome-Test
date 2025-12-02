import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink-black via-purple-glow/20 to-neon-blue/20"
    >
      {/* 背景纹理 - 左侧古籍扫描 */}
      <motion.div
        className="absolute left-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1606041387985-290290d09b10?w=600&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
        animate={{
          x: [-20, 20, -20],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'easeInOut',
        }}
      />

      {/* 背景纹理 - 右侧古籍扫描 */}
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1606041387985-290290d09b10?w=600&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        }}
        animate={{
          x: [20, -20, 20],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* 3D Blob - 左侧 */}
      <motion.div
        className="absolute left-[10%] top-[20%] w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: 'easeInOut',
        }}
      />

      {/* 3D Blob - 右侧 */}
      <motion.div
        className="absolute right-[10%] bottom-[20%] w-80 h-80 bg-purple-glow/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* 浮动书卷 - 左上 */}
      <motion.div
        className="absolute left-[15%] top-[30%] w-32 h-48 opacity-70 pointer-events-none"
        animate={{
          y: [-15, 15, -15],
          rotate: [-5, 5, -5],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gold-brown/30 to-amber-600/30 rounded-lg border border-gold-brown/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-gold-brown text-4xl">📜</span>
        </div>
      </motion.div>

      {/* 浮动书卷 - 右下 */}
      <motion.div
        className="absolute right-[15%] bottom-[30%] w-32 h-48 opacity-70 pointer-events-none"
        animate={{
          y: [15, -15, 15],
          rotate: [5, -5, 5],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gold-brown/30 to-amber-600/30 rounded-lg border border-gold-brown/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-gold-brown text-4xl">📖</span>
        </div>
      </motion.div>

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
            <motion.div
              className="absolute inset-0 bg-white/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-purple-glow rounded-lg opacity-75 blur"
              animate={{ opacity: [0.75, 0.5, 0.75] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </button>

          {/* 了解产品功能按钮 */}
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-transparent border-2 border-gold-brown text-gold-brown font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-gold-brown/10 hover:scale-105"
          >
            <span className="relative z-10">了解产品功能</span>
            <motion.div
              className="absolute inset-0 bg-gold-brown/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-gold-brown to-amber-500 rounded-lg opacity-75 blur opacity-0"
              whileHover={{ opacity: 0.75 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;