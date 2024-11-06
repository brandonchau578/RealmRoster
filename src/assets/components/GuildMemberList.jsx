import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GuildMemberList.css';

function GuildMemberList() {
  const [crewmates, setCrewmates] = useState([
    { id: 1, name: 'Crewmate One', role: 'Warrior' },
    { id: 2, name: 'Crewmate Two', role: 'Mage' },
    // Additional sample data can be added here
  ]);

  const handleDelete = (id) => {
    setCrewmates(crewmates.filter((crewmate) => crewmate.id !== id));
  };

  return (
    <div className="GuildListContainer">
      <h1>Guild Member List</h1>
      <div className="GuildListContent">
        {crewmates.map((crewmate) => (
          <div key={crewmate.id} className="GuildMemberCard">
            <Link to={`/crewmate/${crewmate.id}`} className="GuildMemberLink">
              {crewmate.name} - {crewmate.role}
            </Link>
            <button onClick={() => handleDelete(crewmate.id)} className="DeleteButton">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuildMemberList;
