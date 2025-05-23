import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <section className="dashboard">
      <h2>Analytics Overview</h2>
      <div className="cards">
        <div className="card">Users: 2,430</div>
        <div className="card">Sessions: 8,540</div>
        <div className="card">Retention: 76%</div>
      </div>
    </section>
  );
}

export default Dashboard; 