import React, { useState } from 'react';
import './CreateGuildMember.css';
import MapleStoryClass from './maplestory classes.webp';

function CreateGuildMember() {
  const [selectedSpecies, setSelectedSpecies] = useState(''); // Add this state

  return (
    <div className="CreationContainer">
      <h1>Create a New Guild Member</h1>
      <img className = "MapleStoryClass"src = {MapleStoryClass}/>
      <div className="inputContainers">
        <div className="NameContainer">
          <h1>Name:</h1>
          <input placeholder="Enter a Guild Member's name" />
        </div>
        <div className="ClassContainer">
          <h1>Class:</h1>
          <select id="classOptions" name="options" defaultValue="">
            <option value="" disabled hidden>
              Class
            </option>
            <option value="option1">Warrior</option>
            <option value="option2">Wizard</option>
            <option value="option3">Archer</option>
            <option value="option4">Thief</option>
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
      </div>
      <div className = "CreateCrewmate">
        <a href="#" class="CreateCrewmateButton">Create Crewmate</a>
      </div>
    </div>
  );
}

export default CreateGuildMember;