// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Registration from './components/registration';
import Login from './components/Login';
import Events from './components/events';
import Landing from './components/landing';
import Udyam from './components/udyam';
import MSME from './components/msme';
import Gallery from './components/gallery';
import Disclaimer from './components/disclaimer';
import Feedback from './components/feedback';
import ContactUs from './components/contactus';
import WhatsNew from './components/whatsNew';
import Grievances from './components/grievances';
import AdminGrievances from './components/adminGrievances';
import { RegistrationProvider } from './context/RegistrationContext';
import './App.css';

function App() {
  return (
    <RegistrationProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/registration" />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/udyam" element={<Udyam />} />
          <Route path="/msme" element={<MSME />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/grievances" element={<Grievances />} />
          <Route path="/admin/grievances" element={<AdminGrievances />} />
          <Route path="/" element={<Navigate to="/registration" />} /> {/* Default route */}
        </Routes>
      </Layout>
    </Router>
    </RegistrationProvider>
  );
}

export default App;
