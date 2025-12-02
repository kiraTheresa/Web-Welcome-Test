import React from 'react';
import { motion } from 'framer-motion';

const TeamMembers = () => {
  // 团队成员数据
  const teamMembers = [
    {
      id: 0,
      name: '张三',
      role: '项目负责人',
      avatar: 'https://ui-avatars.com/api/?name=张三&background=random&color=fff&size=200',
    },
    {
      id: 1,
      name: '李四',
      role: '前端开发',
      avatar: 'https://ui-avatars.com/api/?name=李四&background=random&color=fff&size=200',
    },
    {
      id: 2,
      name: '王五',
      role: '后端开发',
      avatar: 'https://ui-avatars.com/api/?name=王五&background=random&color=fff&size=200',
    },
    {
      id: 3,
      name: '赵六',
      role: '算法工程师',
      avatar: 'https://ui-avatars.com/api/?name=赵六&background=random&color=fff&size=200',
    },
    {
      id: 4,
      name: '孙七',
      role: '数据处理',
      avatar: 'https://ui-avatars.com/api/?name=孙七&background=random&color=fff&size=200',
    },
    {
      id: 5,
      name: '周八',
      role: 'UI/UX设计',
      avatar: 'https://ui-avatars.com/api/?name=周八&background=random&color=fff&size=200',
    },
    {
      id: 6,
      name: '吴九',
      role: '测试工程师',
      avatar: 'https://ui-avatars.com/api/?name=吴九&background=random&color=fff&size=200',
    },
    {
      id: 7,
      name: '郑十',
      role: '文档编写',
      avatar: 'https://ui-avatars.com/api/?name=郑十&background=random&color=fff&size=200',
    },
  ];

  return (
    <section id="team" className="py-20 bg-ink-black">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">团队成员</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            专业的团队，致力于打造最好的历史人物智能标注平台
          </p>
        </motion.div>

        {/* 团队成员网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gold-brown/30 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                borderColor: '#5f8cff',
              }}
            >
              {/* 头像 */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-blue to-purple-glow rounded-full opacity-50 blur-md"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3, delay: index * 0.2 }}
                ></motion.div>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-ink-black relative z-10"
                />
              </div>

              {/* 姓名 */}
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>

              {/* 职责 */}
              <p className="text-gold-brown font-medium mb-4">{member.role}</p>

              {/* 装饰元素 */}
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-gold-brown to-transparent opacity-50"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;