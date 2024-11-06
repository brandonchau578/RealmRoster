import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient.js';
import './GuildMemberList.css';

function GuildMemberList() {
  const [guildMembers, setGuildMembers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();  // To access query params

  // Check for query parameters to show success message
  const queryParams = new URLSearchParams(location.search);
  const deletionSuccess = queryParams.get('deletion') === 'success';

  // Fetch guild members on component load
  useEffect(() => {
    const fetchGuildMembers = async () => {
      const { data, error } = await supabase
        .from('guild_members')
        .select('*');
      
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setGuildMembers(data);  // Set the fetched data into state
      }
    };

    fetchGuildMembers();
  }, []);

  // Navigate to member details page
  const viewDetails = (memberId) => {
    navigate(`/guild-member-details/${memberId}`);
  };

  return (
    <div className="GuildMemberListContainer">
      <h1>Guild Members</h1>

      {/* Show success message if deletion was successful */}
      {deletionSuccess && <p style={{ color: 'green' }}>Deletion successful!</p>}

      <div className="GuildMembersGrid">
        {guildMembers.length > 0 ? (
          guildMembers.map((member) => (
            <div key={member.id} className="GuildMemberCard">
              <h2>{member.name}</h2>
              <p><strong>Class:</strong> {member.role}</p>
              <p><strong>Species:</strong> {member.species}</p>
              <button onClick={() => viewDetails(member.id)}>View Details</button>
            </div>
          ))
        ) : (
          <p>No guild members found.</p>
        )}
      </div>
    </div>
  );
}

export default GuildMemberList;


