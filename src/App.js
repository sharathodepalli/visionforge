import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import JoinTeam from './components/JoinTeam'; // Added import
import Projects from './components/Projects'; // Added import
import ProjectDetails from './components/ProjectDetails'; // Added import
import ContactUs from './components/ContactUs'; // Added import
import Dashboard from './components/Dashboard'; // Added import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/join-team" element={<JoinTeam />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
