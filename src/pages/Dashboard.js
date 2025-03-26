// src/pages/Dashboard.js
import { useEffect, useState } from 'react'; // Ensure useState is imported
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../services/authService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="layout">
        <Sidebar isOpen={isSidebarOpen} />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;