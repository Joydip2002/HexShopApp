import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';  
import './dashboard.css';  

function Sidebar() {
  return (
    <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
        <i className="fas fa-user-secret me-2"></i> Admin Dashboard
      </div>
      <div className="list-group list-group-flush my-3">
        {/* Replace the links with React Router Links */}
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active">
          <i className="fas fa-tachometer-alt me-2"></i>Dashboard
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-project-diagram me-2"></i>Projects
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i className="fas fa-chart-line me-2"></i>Analytics
        </a>
      </div>
    </div>
  );
}

function Dashboard() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSidebar = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`d-flex ${isToggled ? 'toggled' : ''}`} id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <button className="btn btn-primary" onClick={toggleSidebar} id="menu-toggle">
          <i className={`fas ${isToggled ? 'fa-align-right' : 'fa-align-left'} primary-text fs-4 me-3`}></i>
        </button>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <h2 className="fs-2 m-0">Dashboard</h2>
          </div>
        </nav>
        <div className="container-fluid px-4">
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
