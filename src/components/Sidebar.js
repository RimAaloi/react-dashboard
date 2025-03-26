// src/components/Sidebar.js
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faUpload } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faBox} /> Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/upload-file" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faUpload} /> Upload File
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;