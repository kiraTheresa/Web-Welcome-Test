import React from 'react';
import './App.css';
import SideNavigation from './components/SideNavigation/SideNavigation';
import WelcomeSection from './components/Hero/WelcomeSection';
import FeatureTabs from './components/FeatureTabs/FeatureTabs';
import CodeDemo from './components/CodeDemo/CodeDemo';
import GanttScrollView from './components/GanttScrollView/GanttScrollView';
import ValueHighlights from './components/ValueHighlights/ValueHighlights';
import TeamMembers from './components/TeamMembers/TeamMembers';
import BackgroundSection from './components/BackgroundSection/BackgroundSection';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* 侧边导航栏 */}
      <SideNavigation />
      
      {/* 主要内容区域 */}
      <main>
        {/* 1. 欢迎 Hero 区 */}
        <WelcomeSection />
        
        {/* 2. 产品功能展示区 */}
        <FeatureTabs />
        
        {/* 3. 智能标注示例区 */}
        <CodeDemo />
        
        {/* 4. 开发流程展示区 */}
        <GanttScrollView />
        
        {/* 5. 产品价值亮点区 */}
        <ValueHighlights />
        
        {/* 6. 团队成员展示区 */}
        <TeamMembers />
        
        {/* 7. 产品背景与版权说明区 */}
        <BackgroundSection />
      </main>
    </div>
  );
}

export default App;
