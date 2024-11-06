import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient.js';
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast
import './CreateGuildMember.css';
import MapleStoryClass from './maplestory classes.webp';

function CreateGuildMember({ refreshGuildMembers }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !role || !selectedSpecies) {
      toast.error('Please fill in all fields');
      return;
    }

    // Insert new member into database
    try {
      const { data, error } = await supabase
        .from('guild_members')
        .insert({
          name,
          role: `${role}`,
          species: selectedSpecies,
        });

      // Handle any error from Supabase
      if (error) {
        throw new Error(error.message);
      }

      console.log('Guild member created:', data);

      // Reset form fields
      setName('');
      setRole('');
      setSelectedSpecies('');

      // Show success notification
      toast.success('Guild member created successfully!');

      // Call the function passed from GuildMemberList to refresh the list
      if (refreshGuildMembers) {
        refreshGuildMembers();
      }

      // Navigate to the Guild Member List page
      navigate('/guild-member-list');
    } catch (error) {
      console.error('Error inserting guild member:', error);
      toast.error('Failed to create guild member. Please try again.');
    }
  };

  return (
    <div className="CreationContainer">
      <h1>Create a New Guild Member</h1>
      <img className="MapleStoryClass" src={MapleStoryClass} alt="MapleStory Classes" />
      <form onSubmit={handleSubmit} className="inputContainers">
        <div className="NameContainer">
          <h1>Name:</h1>
          <input
            placeholder="Enter a Guild Member's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ClassContainer">
          <h1>Class:</h1>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Class
            </option>
            <option value="Warrior">Warrior</option>
            <option value="Wizard">Wizard</option>
            <option value="Archer">Archer</option>
            <option value="Thief">Thief</option>
          </select>
        </div>
        <div className="SpeciesContainer">
          <h1>Species:</h1>
          <div className="optionsContainer">
            <label>
              <input
                type="radio"
                name="species"
                value="Human"
                checked={selectedSpecies === 'Human'}
                onChange={() => setSelectedSpecies('Human')}
              />
              Human
            </label>
            <label>
              <input
                type="radio"
                name="species"
                value="Elf"
                checked={selectedSpecies === 'Elf'}
                onChange={() => setSelectedSpecies('Elf')}
              />
              Elf
            </label>
            <label>
              <input
                type="radio"
                name="species"
                value="Dwarf"
                checked={selectedSpecies === 'Dwarf'}
                onChange={() => setSelectedSpecies('Dwarf')}
              />
              Dwarf
            </label>
            <label>
              <input
                type="radio"
                name="species"
                value="Ogre"
                checked={selectedSpecies === 'Ogre'}
                onChange={() => setSelectedSpecies('Ogre')}
              />
              Ogre
            </label>
          </div>
        </div>
        <div className="CreateCrewmate">
          <button type="submit" className="CreateCrewmateButton">
            Create Guildmate
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateGuildMember;