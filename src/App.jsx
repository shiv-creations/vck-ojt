import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import ApplyNow from './pages/ApplyNow';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/apply" element={<ApplyNow />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <ChatbotComponent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
