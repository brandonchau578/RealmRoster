import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sideBarContainer">
      <h2>Realm Roster</h2>
      <nav className="sideBarOptions">
        <Link to="/">Home</Link>
        <Link to="/create-guild-member">Create a Guild Member</Link>
        <Link to="/guild-member-list">Guild Member List</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
