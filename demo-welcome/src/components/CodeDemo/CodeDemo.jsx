import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDemo = () => {
  // 模拟标注结果数据
  const annotationResults = [
    { text: '李白', type: 'PERSON', color: 'bg-blue-500/30 border-blue-500' },
    { text: '，', type: 'PUNCTUATION', color: 'bg-gray-500/30 border-gray-500' },
    { text: '字', type: 'WORD', color: 'bg-gray-500/30 border-gray-500' },
    { text: '太白', type: 'STYLE_NAME', color: 'bg-green-500/30 border-green-500' },
    { text: '，', type: 'PUNCTUATION', color: 'bg-gray-500/30 border-gray-500' },
    { text: '青莲居士', type: 'TITLE', color: 'bg-purple-500/30 border-purple-500' },
    { text: '，', type: 'PUNCTUATION', color: 'bg-gray-500/30 border-gray-500' },
    { text: '唐代', type: 'EVENT-TIME', color: 'bg-yellow-500/30 border-yellow-500' },
    { text: '著名', type: 'WORD', color: 'bg-gray-500/30 border-gray-500' },
    { text: '诗人', type: 'OCCUPATION', color: 'bg-red-500/30 border-red-500' },
    { text: '。', type: 'PUNCTUATION', color: 'bg-gray-500/30 border-gray-500' },
  ];

  // 模拟JSON标注数据
  const jsonData = JSON.stringify({
    text: "李白，字太白，青莲居士，唐代著名诗人。",
    entities: [
      { "start": 0, "end": 2, "label": "PERSON", "text": "李白" },
      { "start": 3, "end": 5, "label": "STYLE_NAME", "text": "太白" },
      { "start": 6, "end": 10, "label": "TITLE", "text": "青莲居士" },
      { "start": 11, "end": 13, "label": "EVENT-TIME", "text": "唐代" },
      { "start": 14, "end": 16, "label": "OCCUPATION", "text": "诗人" }
    ]
  }, null, 2);

  return (
    <section id="code" className="py-20 bg-gradient-to-b from-ink-black via-gray-900 to-ink-black">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">智能标注示例</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            演示文本智能标注的真实效果，支持现代文和古文的自动标注
          </p>
        </motion.div>

        {/* 主要内容区域 */}
        <div className="space-y-8">
          {/* 示例文档和标注结果 */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 左侧：示例文档 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gold-brown/30">
              <h3 className="text-xl font-semibold mb-4 text-gold-brown flex items-center gap-2">
                <span>📜</span> 示例文档
              </h3>
              <div className="bg-gray-900/80 rounded-lg p-6 h-64 overflow-hidden relative">
                {/* 古籍纹理背景 */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1606041387985-290290d09b10?w=600&auto=format&fit=crop&q=80")',
                  backgroundSize: 'cover',
                }} />
                
                {/* 示例文本 */}
                <motion.div 
                  className="relative z-10 space-y-2 text-gray-300 text-lg font-serif" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="leading-relaxed">
                    <span className="text-gold-brown">李白</span>，字太白，青莲居士，
                    <span className="text-gold-brown">唐代</span>著名诗人。
                  </p>
                  <p className="leading-relaxed mt-4">
                    他的诗歌风格豪放飘逸，意境奇妙，被誉为"诗仙"。
                    代表作品有《静夜思》、《望庐山瀑布》等。
                  </p>
                  <p className="text-gold-brown/70 text-sm mt-6 italic">
                    —— 《旧唐书·李白传》节选
                  </p>
                </motion.div>
              </div>
            </div>

            {/* 右侧：标注结果 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gold-brown/30">
              <h3 className="text-xl font-semibold mb-4 text-gold-brown flex items-center gap-2">
                <span>🏷️</span> 标注结果
              </h3>
              <div className="bg-gray-900/80 rounded-lg p-6 min-h-64">
                <div className="flex flex-wrap gap-2 mb-6">
                  {annotationResults.map((item, index) => (
                    <motion.span
                      key={index}
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${item.color} transition-all duration-200 hover:scale-105`}
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.1 * index, 
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: `0 0 15px ${item.color.includes('blue') ? 'rgba(59, 130, 246, 0.5)' : item.color.includes('green') ? 'rgba(34, 197, 94, 0.5)' : item.color.includes('purple') ? 'rgba(139, 92, 246, 0.5)' : item.color.includes('yellow') ? 'rgba(234, 179, 8, 0.5)' : 'rgba(239, 68, 68, 0.5)'}`
                      }}
                    >
                      {item.text}
                    </motion.span>
                  ))}
                </div>

                {/* 标注类型说明 */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">标注类型说明：</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                      <span className="text-gray-400">人物（PERSON）</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-gray-400">字号（STYLE_NAME）</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
                      <span className="text-gray-400">称号（TITLE）</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="text-gray-400">时代（EVENT-TIME）</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="text-gray-400">职业（OCCUPATION）</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 代码高亮区 */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gold-brown/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gold-brown flex items-center gap-2">
              <span>💻</span> 标注数据结构
            </h3>
            <div className="bg-gray-900/80 rounded-lg overflow-hidden">
              <SyntaxHighlighter
                language="json"
                style={tomorrow}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  background: 'transparent',
                  padding: '1.5rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                }}
              >
                {jsonData}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;