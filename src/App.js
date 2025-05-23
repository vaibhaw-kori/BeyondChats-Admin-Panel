// File: src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ChatPanel from './components/ChatPanel';
import Settings from './components/Settings';
import Home from './components/Home';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const sidebar = document.querySelector('.sidebar');
      const menuBtn = document.querySelector('.menu-btn');
      if (sidebar && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      const timeout = setTimeout(() => setSidebarOpen(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Chats':
        return <ChatPanel />;
      case 'Analytics':
        return <Dashboard />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`app-container ${theme} ${sidebarOpen ? 'sidebar-active' : ''}`}> 
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="main-content fade-in">
        <Header theme={theme} setTheme={setTheme} toggleSidebar={toggleSidebar} />
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
