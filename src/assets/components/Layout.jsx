import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path as necessary
import './Layout.css'; // Create this CSS file to manage styles
const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Sidebar />
      <div className="contentContainer">
        {children}
      </div>
    </div>
  );
};

export default Layout;