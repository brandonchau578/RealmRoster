import React from 'react';
import './Homepage.css';
import MapleStory from './maplestory.png';

function Homepage() {
  return (
    <div className = "HomePageContainer">
      <h1>Welcome to Realm Roster!</h1>
      <p>You can create your very own guild members with different classes and species before sending them off the the mist of war.</p>
      <img src = {MapleStory}/>
    </div>
  );
}

export default Homepage;
