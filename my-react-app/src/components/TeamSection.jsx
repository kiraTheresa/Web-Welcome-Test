import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  // 团队成员数据
  const teamMembers = [
    { name: '张三', role: '项目经理', avatar: '👨‍💼', color: '#6366f1' },
    { name: '李四', role: '前端开发', avatar: '👩‍💻', color: '#8b5cf6' },
    { name: '王五', role: '后端开发', avatar: '👨‍💻', color: '#ec4899' },
    { name: '赵六', role: 'UI设计师', avatar: '🎨', color: '#10b981' },
    { name: '孙七', role: 'UX设计师', avatar: '🧠', color: '#f59e0b' },
    { name: '周八', role: '测试工程师', avatar: '🧪', color: '#ef4444' },
    { name: '吴九', role: 'DevOps', avatar: '⚙️', color: '#06b6d4' },
    { name: '郑十', role: '产品经理', avatar: '📱', color: '#84cc16' }
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2>团队成员</h2>
          <p>我们的核心开发团队成员</p>
        </motion.div>

        {/* 团队成员网格 */}
        <div className="grid grid-3" style={{ gap: '2rem' }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="card team-member"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div
                className="team-avatar"
                style={{
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}80)`,
                  fontSize: '3rem',
                  width: '120px',
                  height: '120px'
                }}
              >
                {member.avatar}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              
              {/* 悬停时显示的社交链接（可选） */}
              <motion.div
                className="social-links"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  marginTop: '1.5rem'
                }}
              >
                <a
                  href="#"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.5rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = member.color}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  🔗
                </a>
                <a
                  href="#"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.5rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = member.color}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  📧
                </a>
                <a
                  href="#"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.5rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = member.color}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  🌐
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;