import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCubes, FaCode, FaProjectDiagram, FaStar, FaUsers, FaBook, FaBars, FaTimes } from 'react-icons/fa';

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const sidebarRef = useRef(null);

  const navItems = [
    { id: 'welcome', label: '开门界面', icon: <FaHome /> },
    { id: 'features', label: '产品功能', icon: <FaCubes /> },
    { id: 'code', label: '标注示例', icon: <FaCode /> },
    { id: 'gantt', label: '甘特图', icon: <FaProjectDiagram /> },
    { id: 'value', label: '亮点价值', icon: <FaStar /> },
    { id: 'team', label: '团队', icon: <FaUsers /> },
    { id: 'background', label: '背景说明', icon: <FaBook /> },
  ];

  // 滚动监听，更新当前激活的section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 点击锚点链接后关闭侧边栏
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // 点击遮罩层关闭侧边栏
  const handleOverlayClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative z-50">
      {/* 菜单按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 p-3 rounded-full bg-ink-black/80 backdrop-blur-md border border-gold-brown/30 text-white hover:bg-neon-blue/50 transition-all duration-300 z-50"
        aria-label="Open navigation"
      >
        <FaBars className="text-xl" />
      </button>

      {/* 遮罩层 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>

      {/* 侧边栏 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-64 bg-ink-black/95 backdrop-blur-lg border-r border-gold-brown/30 z-50 p-6 overflow-y-auto"
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gold-brown/20 text-white hover:bg-neon-blue/50 transition-all duration-300"
              aria-label="Close navigation"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* 侧边栏标题 */}
            <div className="mt-12 mb-8 text-center">
              <h2 className="text-2xl font-bold text-gold-brown mb-2">BiograFi</h2>
              <p className="text-sm text-gray-400">传记快线</p>
            </div>

            {/* 导航菜单 */}
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-300 ${activeSection === item.id
                        ? 'bg-neon-blue/20 text-white border-l-4 border-neon-blue'
                        : 'text-gray-400 hover:text-white hover:bg-gold-brown/10'}
                      `}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 底部装饰 */}
            <div className="absolute bottom-8 left-0 right-0 px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gold-brown/50 to-transparent mb-4" />
              <p className="text-xs text-gray-500 text-center">
                © 2025 浙江工商大学
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideNavigation;