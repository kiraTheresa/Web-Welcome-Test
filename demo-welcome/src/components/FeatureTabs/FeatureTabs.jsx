import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTextWidth, FaTags, FaBookOpen, FaCommentDots } from 'react-icons/fa';

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      title: '自动分词',
      icon: <FaTextWidth />,
      description: '基于深度学习的自动分词技术，能够准确识别古籍中的词汇边界，支持多种古汉语文体。',
      content: (
        <div className="flex items-center justify-center h-64 bg-gray-800/50 rounded-lg overflow-hidden">
          <div className="text-center p-6">
            <div className="text-gold-brown text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">自动分词演示</h3>
            <p className="text-gray-400">使用先进的NLP算法，实现高精度的古籍文本分词</p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: '实体标注',
      icon: <FaTags />,
      description: '自动识别并标注文本中的实体信息，包括姓名、地名、官职、事件等，支持自定义标注规则。',
      content: (
        <div className="flex items-center justify-center h-64 bg-gray-800/50 rounded-lg overflow-hidden">
          <div className="text-center p-6">
            <div className="text-gold-brown text-4xl mb-4">🏷️</div>
            <h3 className="text-xl font-semibold mb-2">实体标注演示</h3>
            <p className="text-gray-400">智能识别文本中的人名、地名、官职等实体信息</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: '专籍解析',
      icon: <FaBookOpen />,
      description: '针对《旧唐书》《清史稿》等传记文献的专用解析引擎，能够理解传记结构和叙事逻辑。',
      content: (
        <div className="flex items-center justify-center h-64 bg-gray-800/50 rounded-lg overflow-hidden">
          <div className="text-center p-6">
            <div className="text-gold-brown text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">专籍解析演示</h3>
            <p className="text-gray-400">深入理解《旧唐书》《清史稿》等传记文献的结构</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: '智能问答',
      icon: <FaCommentDots />,
      description: '基于传记知识图谱的智能问答系统，能够回答关于历史人物的各种问题，支持上下文理解。',
      content: (
        <div className="flex items-center justify-center h-64 bg-gray-800/50 rounded-lg overflow-hidden">
          <div className="text-center p-6">
            <div className="text-gold-brown text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">智能问答演示</h3>
            <p className="text-gray-400">基于传记知识图谱的智能问答系统</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-ink-black">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">产品功能展示</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            融合古籍研究方法与人工智能技术，为传记学、历史学、人文学研究提供更高效的文献处理体验
          </p>
        </motion.div>

        {/* 卡片容器 */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto border border-gold-brown/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' }}
        >
          {/* 标签页导航 */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === feature.id
                  ? 'bg-gradient-to-r from-neon-blue to-purple-glow text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
                onClick={() => setActiveTab(feature.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{feature.icon}</span>
                <span>{feature.title}</span>
              </motion.button>
            ))}
          </div>

          {/* 标签页内容 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* 功能标题和描述 */}
              <div className="text-center">
                <motion.h3
                  className="text-2xl font-bold mb-3 text-gold-brown"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {features[activeTab].title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {features[activeTab].description}
                </motion.p>
              </div>

              {/* 功能演示内容 */}
              <motion.div
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {features[activeTab].content}
              </motion.div>

              {/* 功能特点列表 */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <h4 className="font-semibold mb-2 text-white">高精度</h4>
                  <p className="text-sm text-gray-400">采用先进的深度学习模型，准确率达到95%以上</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <h4 className="font-semibold mb-2 text-white">高效率</h4>
                  <p className="text-sm text-gray-400">处理速度快，支持批量处理，大幅提高研究效率</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <h4 className="font-semibold mb-2 text-white">易扩展</h4>
                  <p className="text-sm text-gray-400">支持自定义模型和规则，适应不同研究需求</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureTabs;