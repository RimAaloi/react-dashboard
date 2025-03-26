// src/components/Header.js
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img src="/assets/logo.png" alt="ENSET Logo" className="logo" />
      <button className="logout-btn" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Header;