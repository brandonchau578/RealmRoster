import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './assets/components/Layout'; // Import the new Layout component
import Homepage from './assets/components/Homepage';
import CreateGuildMember from './assets/components/CreateGuildMember';
import GuildMemberList from './assets/components/GuildMemberList';
import GuildMemberDetail from './assets/components/GuildMemberDetails'; 
import './App.css';
import { ToastContainer } from "react-toastify";
import GuildMemberDetails from './assets/components/GuildMemberDetails';

function App() {
  return (
    <Router>
      <Layout> {/* Layout wrapper */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-guild-member" element={<CreateGuildMember />} />
          <Route path="/guild-member-list" element={<GuildMemberList />} />
          <Route path="/guild-member-details/:id" element={<GuildMemberDetails />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </Router>
  );
}

export default App;
