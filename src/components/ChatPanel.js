import React from 'react';
import './ChatPanel.css';

function ChatPanel() {
  const messages = [
    { sender: 'User', text: 'Hi, I need help with my order.' },
    { sender: 'Agent', text: 'Sure, let me check that for you!' },
  ];

  return (
    <section className="chat-panel">
      <h2>Recent Conversations</h2>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender.toLowerCase()}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChatPanel;