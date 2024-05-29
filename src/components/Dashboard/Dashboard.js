import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Dashboard.css'; // New CSS file for dashboard

const Dashboard = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {auth.user ? auth.user.name : 'User'}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
