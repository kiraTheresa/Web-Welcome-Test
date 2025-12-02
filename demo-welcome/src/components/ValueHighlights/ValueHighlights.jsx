import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaDatabase, FaSearch, FaChartLine } from 'react-icons/fa';

const ValueHighlights = () => {
  const highlights = [
    {
      id: 0,
      title: '提高古籍文献处理效率',
      description: '自动标注技术大幅减少人工处理时间，将传统需要数小时的标注工作缩短至几分钟。',
      icon: <FaClock className="text-4xl text-neon-blue" />,
      color: 'from-neon-blue to-blue-600',
    },
    {
      id: 1,
      title: '统一历史人物数据规范',
      description: '基于知识图谱技术，建立标准化的历史人物数据库，确保数据的一致性和准确性。',
      icon: <FaDatabase className="text-4xl text-purple-glow" />,
      color: 'from-purple-glow to-purple-600',
    },
    {
      id: 2,
      title: '科学研究工具',
      description: '为学者和爱好者提供智能问答、查询和传记结构化等功能，助力历史研究。',
      icon: <FaSearch className="text-4xl text-gold-brown" />,
      color: 'from-gold-brown to-amber-600',
    },
  ];

  return (
    <section id="value" className="py-20 bg-gradient-to-b from-ink-black via-gray-900 to-ink-black">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">产品价值亮点</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            BiograFi｜传记快线为历史人物研究带来革命性的变化
          </p>
        </motion.div>

        {/* 亮点卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-brown/30 hover:border-neon-blue/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 30px -10px rgba(${(index === 0 ? '95, 140, 255' : index === 1 ? '171, 110, 255' : '217, 185, 143')}, 0.3)`,
              }}
            >
              {/* 图标 */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 mb-6 shadow-lg`}>
                {highlight.icon}
              </div>

              {/* 标题 */}
              <h3 className="text-2xl font-bold mb-4 text-white">{highlight.title}</h3>

              {/* 描述 */}
              <p className="text-gray-300 mb-6">{highlight.description}</p>

              {/* 装饰元素 */}
              <div className="relative h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${highlight.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 数据可视化装饰 */}
        <motion.div
          className="mt-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-brown/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gold-brown flex items-center gap-2">
                <FaChartLine /> 效率提升对比
              </h3>
              <p className="text-gray-300 mb-6">
                使用BiograFi自动标注系统，相比传统人工标注，效率提升高达90%以上。
                下图展示了不同规模文档的处理时间对比。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/80 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-neon-blue">90%</div>
                  <div className="text-sm text-gray-400">效率提升</div>
                </div>
                <div className="bg-gray-900/80 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-glow">5x</div>
                  <div className="text-sm text-gray-400">速度提升</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 h-64 bg-gray-900/80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gold-brown text-4xl mb-4">📊</div>
                <p className="text-gray-300">效率对比图表</p>
                <p className="text-gray-500 text-sm mt-2">（示例图表占位）</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueHighlights;