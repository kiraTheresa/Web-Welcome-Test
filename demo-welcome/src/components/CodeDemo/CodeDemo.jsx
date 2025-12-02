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
              <div className="bg-gray-900/80 rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gold-brown text-4xl mb-4">📖</div>
                  <p className="text-gray-300 mb-2">李白诗集选段</p>
                  <p className="text-gray-500 text-sm">（示例文档占位）</p>
                </div>
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
                    <span
                      key={index}
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${item.color} transition-all duration-200 hover:scale-105`}
                    >
                      {item.text}
                    </span>
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