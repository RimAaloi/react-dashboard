// src/pages/Products.js
import { useState } from 'react'; // Add this import
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import './Dashboard.css';

const Products = () => {
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

export default Products;