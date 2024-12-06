import React from 'react';
// import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Financial Data Comparison</h1>
      <button className="header-button">Logout</button>
    </header>
  );
};

export default Header;
