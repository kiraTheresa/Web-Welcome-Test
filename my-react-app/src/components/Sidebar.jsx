import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaCubes, 
  FaCode, 
  FaProjectDiagram, 
  FaUsers, 
  FaUniversity,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');

  // 导航项配置
  const navItems = [
    { id: 'welcome', label: '开门界面', icon: <FaHome /> },
    { id: 'features', label: '功能演示', icon: <FaCubes /> },
    { id: 'code', label: '代码示例', icon: <FaCode /> },
    { id: 'workflow', label: '开发流程', icon: <FaProjectDiagram /> },
    { id: 'team', label: '团队成员', icon: <FaUsers /> },
    { id: 'institution', label: '开发团队', icon: <FaUniversity /> },
  ];

  // 监听滚动，更新当前激活的区域
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理导航点击
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  // 切换侧边栏
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // 关闭侧边栏
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 导航切换按钮 */}
      <button 
        className="nav-toggle" 
        id="navToggle"
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 侧边栏 */}
      <motion.nav
        className={`sidebar ${isOpen ? 'open' : ''}`}
        id="sidebar"
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="sidebar-header">
          <h2 className="sidebar-title">导航菜单</h2>
        </div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <motion.button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* 遮罩层 */}
      <motion.div
        className={`overlay ${isOpen ? 'active' : ''}`}
        id="overlay"
        onClick={closeSidebar}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </>
  );
};

export default Sidebar;