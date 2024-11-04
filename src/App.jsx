import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './assets/components/Layout'; // Import the new Layout component
import Homepage from './assets/components/Homepage';
import CreateGuildMember from './assets/components/CreateGuildMember';
import GuildMemberList from './assets/components/GuildMemberList';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-guild-member" element={<CreateGuildMember />} />
          <Route path="/guild-member-list" element={<GuildMemberList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
