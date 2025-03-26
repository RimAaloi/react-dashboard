// src/pages/UploadFile.js
import { useState } from 'react'; // Add this import to fix the next error
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import './Dashboard.css';

const UploadFile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

export default UploadFile;