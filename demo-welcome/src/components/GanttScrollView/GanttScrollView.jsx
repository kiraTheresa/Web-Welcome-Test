import React from 'react';
import { motion } from 'framer-motion';

const GanttScrollView = () => {
  // 任务数据
  const tasks = [
    { name: '需求分析', start: 100, end: 300, color: '#5f8cff', y: 120 },
    { name: '数据处理', start: 300, end: 500, color: '#ab6eff', y: 160 },
    { name: '模型训练', start: 500, end: 900, color: '#5f8cff', y: 200 },
    { name: '前端开发', start: 700, end: 1500, color: '#ab6eff', y: 240 },
    { name: '后端开发', start: 700, end: 1300, color: '#5f8cff', y: 280 },
    { name: '标注系统构建', start: 1100, end: 1700, color: '#ab6eff', y: 320 },
    { name: '测试', start: 1500, end: 1900, color: '#5f8cff', y: 120 },
    { name: '文档/展示', start: 1700, end: 2100, color: '#ab6eff', y: 160 },
  ];

  return (
    <section id="gantt" className="py-20 bg-ink-black">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">开发流程展示</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            展示小组完整的软件工程流程，从需求分析到最终交付
          </p>
        </motion.div>

        {/* 甘特图容器 */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gold-brown/30 overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            scrollBehavior: 'smooth',
            scrollSnapType: 'x proximity',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'thin'
          }}
        >
          <div className="min-w-[2400px]">
            {/* 甘特图SVG */}
            <svg width="2400" height="400" viewBox="0 0 2400 400" className="rounded-lg overflow-hidden">
              {/* 背景网格 */}
              <defs>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* 标题 */}
              <text x="10" y="30" fill="#d9b98f" fontSize="20" fontWeight="bold">BiograFi 开发甘特图</text>
              
              {/* 时间轴 */}
              <g>
                <line x1="100" y1="60" x2="2300" y2="60" stroke="#5f8cff" strokeWidth="2" />
                {Array.from({ length: 12 }, (_, i) => (
                  <g key={i}>
                    <line x1={100 + i * 200} y1="55" x2={100 + i * 200} y2="65" stroke="#5f8cff" strokeWidth="2" />
                    <text x={100 + i * 200 - 20} y="85" fill="#9ca3af" fontSize="12" textAnchor="middle">
                      第{i+1}周
                    </text>
                  </g>
                ))}
              </g>
              
              {/* 任务行 */}
              {tasks.map((task, index) => (
                <g key={index}>
                  {/* 任务名称 */}
                  <text x="50" y={task.y + 5} fill="#e5e7eb" fontSize="14" textAnchor="end">
                    {task.name}
                  </text>
                  {/* 任务条 */}
                  <rect
                    x={task.start}
                    y={task.y - 15}
                    width={task.end - task.start}
                    height={30}
                    rx={5}
                    fill={task.color}
                    opacity="0.7"
                  />
                  {/* 任务条边框 */}
                  <rect
                    x={task.start}
                    y={task.y - 15}
                    width={task.end - task.start}
                    height={30}
                    rx={5}
                    fill="none"
                    stroke={task.color}
                    strokeWidth="2"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* 滚动提示 */}
          <div className="flex items-center justify-center mt-6 gap-2 text-gray-500 text-sm">
            <span>📋</span>
            <span>横向滚动查看完整流程</span>
            <span>📋</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GanttScrollView;