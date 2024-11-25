import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. Here you can view your projects, manage your tasks, and connect with the VisionForge community.</p>
      
      <section className="project-overview">
        <h2>Your Projects</h2>
        <ul>
          <li>Project 1: Future of Online Shopping</li>
          <li>Project 2: Smart Home Automation</li>
          <li>Project 3: AI-powered Health Solutions</li>
        </ul>
      </section>

      <section className="community">
        <h2>Community Updates</h2>
        <p>Join discussions, participate in events, and collaborate with other developers.</p>
        <button className="community-button">Join Community</button>
      </section>
    </div>
  );
};

export default Dashboard;
