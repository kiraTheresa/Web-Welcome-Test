import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Sidebar from './components/Sidebar';
import WelcomeSection from './components/WelcomeSection';
import FeaturesSection from './components/FeaturesSection';
import CodeSection from './components/CodeSection';
import WorkflowSection from './components/WorkflowSection';
import TeamSection from './components/TeamSection';
import InstitutionSection from './components/InstitutionSection';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      {/* 粒子背景 */}
      <ParticlesBackground />
      
      {/* 侧边栏导航 */}
      <Sidebar />
      
      {/* 主内容区域 */}
      <main className="main-content">
        {/* 开门界面 */}
        <WelcomeSection />
        
        {/* 功能演示界面 */}
        <FeaturesSection />
        
        {/* 代码示例界面 */}
        <CodeSection />
        
        {/* 开发流程界面 */}
        <WorkflowSection />
        
        {/* 团队成员界面 */}
        <TeamSection />
        
        {/* 开发团队界面 */}
        <InstitutionSection />
      </main>
    </div>
  );
}

export default App;
