import React from 'react';
import { motion } from 'framer-motion';

const WorkflowSection = () => {
  // 甘特图数据
  const ganttData = [
    {
      task: '项目启动',
      start: 0,
      end: 10,
      color: '#6366f1'
    },
    {
      task: '需求分析',
      start: 8,
      end: 20,
      color: '#8b5cf6'
    },
    {
      task: '设计阶段',
      start: 18,
      end: 35,
      color: '#ec4899'
    },
    {
      task: '开发阶段',
      start: 30,
      end: 65,
      color: '#10b981'
    },
    {
      task: '测试阶段',
      start: 60,
      end: 80,
      color: '#f59e0b'
    },
    {
      task: '部署上线',
      start: 75,
      end: 90,
      color: '#ef4444'
    },
    {
      task: '项目验收',
      start: 85,
      end: 100,
      color: '#06b6d4'
    }
  ];

  // SVG 配置
  const svgWidth = 1200;
  const svgHeight = 400;
  const taskHeight = 40;
  const taskSpacing = 20;
  const leftMargin = 120;
  const topMargin = 40;

  return (
    <section id="workflow" className="section">
      <div className="container">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2>开发流程</h2>
          <p>项目的完整开发周期和时间线</p>
        </motion.div>

        {/* 甘特图卡片 */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>项目时间线</h3>
          
          {/* 横向滚动容器 */}
          <div className="horizontal-scroll">
            {/* SVG 甘特图 */}
            <svg
              width={svgWidth}
              height={svgHeight}
              style={{ display: 'block', margin: '0 auto' }}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            >
              {/* 背景网格线 */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* 垂直时间线 */}
              <line
                x1={leftMargin}
                y1={topMargin}
                x2={leftMargin}
                y2={svgHeight - topMargin}
                stroke="var(--border-color)"
                strokeWidth="2"
              />

              {/* 任务条和标签 */}
              {ganttData.map((item, index) => {
                const y = topMargin + index * (taskHeight + taskSpacing) + taskHeight / 2;
                const barStart = leftMargin + (item.start * (svgWidth - leftMargin - 40)) / 100;
                const barWidth = ((item.end - item.start) * (svgWidth - leftMargin - 40)) / 100;

                return (
                  <g key={index}>
                    {/* 任务标签 */}
                    <text
                      x={leftMargin - 10}
                      y={y}
                      textAnchor="end"
                      dominantBaseline="middle"
                      fill="var(--text-primary)"
                      fontSize="14"
                      fontWeight="500"
                    >
                      {item.task}
                    </text>

                    {/* 任务条 */}
                    <motion.rect
                      x={barStart}
                      y={y - taskHeight / 2}
                      width={barWidth}
                      height={taskHeight}
                      rx={4}
                      fill={item.color}
                      fillOpacity="0.8"
                      stroke={item.color}
                      strokeWidth="2"
                      initial={{ width: 0 }}
                      whileInView={{ width: barWidth }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                    />

                    {/* 任务条悬停效果 */}
                    <rect
                      x={barStart}
                      y={y - taskHeight / 2}
                      width={barWidth}
                      height={taskHeight}
                      rx={4}
                      fill="transparent"
                      cursor="pointer"
                      onMouseEnter={(e) => {
                        e.currentTarget.previousSibling.setAttribute('fill-opacity', '1');
                        e.currentTarget.previousSibling.setAttribute('filter', 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2))');
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.previousSibling.setAttribute('fill-opacity', '0.8');
                        e.currentTarget.previousSibling.setAttribute('filter', 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))');
                      }}
                    />

                    {/* 任务连接线（如果不是第一个任务） */}
                    {index > 0 && (
                      <line
                        x1={leftMargin + (ganttData[index - 1].end * (svgWidth - leftMargin - 40)) / 100}
                        y1={topMargin + (index - 1) * (taskHeight + taskSpacing) + taskHeight / 2}
                        x2={barStart}
                        y2={y}
                        stroke="var(--border-color)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    )}
                  </g>
                );
              })}

              {/* 时间刻度 */}
              <g>
                {[0, 20, 40, 60, 80, 100].map((tick) => {
                  const x = leftMargin + (tick * (svgWidth - leftMargin - 40)) / 100;
                  return (
                    <g key={tick}>
                      {/* 刻度线 */}
                      <line
                        x1={x}
                        y1={topMargin}
                        x2={x}
                        y2={svgHeight - topMargin}
                        stroke="var(--border-color)"
                        strokeWidth="1"
                      />
                      {/* 刻度标签 */}
                      <text
                        x={x}
                        y={svgHeight - 10}
                        textAnchor="middle"
                        fill="var(--text-secondary)"
                        fontSize="12"
                      >
                        {tick}%
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* 图例 */}
              <g transform={`translate(${leftMargin}, ${svgHeight - 80})`}>
                <text
                  x={0}
                  y={-20}
                  fill="var(--text-primary)"
                  fontSize="14"
                  fontWeight="600"
                >
                  图例
                </text>
                <g transform="translate(0, 0)">
                  {ganttData.map((item, index) => (
                    <g key={index} transform={`translate(${index * 150}, 0)`}>
                      <rect
                        x={0}
                        y={0}
                        width={16}
                        height={16}
                        rx={3}
                        fill={item.color}
                        fillOpacity="0.8"
                      />
                      <text
                        x={24}
                        y={12}
                        fill="var(--text-secondary)"
                        fontSize="12"
                      >
                        {item.task}
                      </text>
                    </g>
                  ))}
                </g>
              </g>
            </svg>
          </div>

          {/* 甘特图说明 */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              横向滚动查看完整时间线，悬停在任务条上查看详细信息
            </p>
          </div>
        </motion.div>

        {/* 流程步骤说明 */}
        <motion.div
          className="grid grid-3"
          style={{ marginTop: '3rem', gap: '1.5rem' }}
        >
          {[
            { step: '1', title: '规划阶段', description: '需求分析和项目规划', icon: '📋' },
            { step: '2', title: '设计阶段', description: 'UI/UX设计和技术架构', icon: '🎨' },
            { step: '3', title: '开发阶段', description: '代码实现和功能开发', icon: '💻' },
            { step: '4', title: '测试阶段', description: '功能测试和性能优化', icon: '🧪' },
            { step: '5', title: '部署阶段', description: '上线部署和监控设置', icon: '🚀' },
            { step: '6', title: '维护阶段', description: '持续迭代和技术支持', icon: '🔧' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{ textAlign: 'center', padding: '1.5rem' }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1rem',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  margin: '0 auto 1rem',
                  background: 'rgba(99, 102, 241, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'var(--primary-color)'
                }}
              >
                {item.step}
              </div>
              <h4>{item.title}</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;