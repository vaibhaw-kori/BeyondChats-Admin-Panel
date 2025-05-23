import React from 'react';
import { FaHome, FaComments, FaCog, FaChartLine, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, setActiveTab, activeTab }) {
  const links = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Chats', icon: <FaComments /> },
    { name: 'Analytics', icon: <FaChartLine /> },
    { name: 'Settings', icon: <FaCog /> }
  ];

  return (
    <div className={`sidebar slide-in-left ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">BeyondChats</div>
        <FaTimes className="close-btn" onClick={toggleSidebar} />
      </div>
      <nav>
        {links.map(link => (
          <a
            key={link.name}
            className={`hover-effect ${activeTab === link.name ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(link.name);
              toggleSidebar();
            }}>
            {link.icon} {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;