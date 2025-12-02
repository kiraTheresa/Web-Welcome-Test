import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCopyright } from 'react-icons/fa';

const BackgroundSection = () => {
  return (
    <section id="background" className="py-20 bg-gradient-to-b from-ink-black via-gray-900 to-ink-black">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">产品背景与版权说明</h2>
        </motion.div>

        {/* 内容容器 */}
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-brown/30 space-y-8">
          {/* 开发团队 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gold-brown flex items-center gap-2">
              <FaUniversity /> 开发团队
            </h3>
            <p className="text-gray-300">
              浙江工商大学 · 计算机科学与技术学院
            </p>
            <p className="text-gray-300 mt-2">
              2025 毕业设计项目（Demo 展示版本）
            </p>
          </motion.div>

          {/* 平台定位 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gold-brown">平台定位</h3>
            <p className="text-gray-300">
              BiograFi｜传记快线是一个面向历史人物研究者与文史爱好者的智能标注平台，通过 AI 技术提升古籍文献处理效率与研究质量。
            </p>
          </motion.div>

          {/* 声明 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gold-brown">声明</h3>
            <p className="text-gray-300">
              本页面为展示用 Demo，部分内容与素材采用占位图/网络公共资源，仅用于教学或项目演示。
            </p>
          </motion.div>

          {/* 版权信息 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6 border-t border-gold-brown/30 text-center"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              <FaCopyright /> 2025 BiograFi｜传记快线. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;