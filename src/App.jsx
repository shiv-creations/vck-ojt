// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import ContactPage from "./pages/ContactPage";

import "./App.css"; // Import the main CSS file for global styles

import "./pages/Styles/All-Pages.css";

import AboutPage from "./pages/AboutPage";

import CoursesPage from "./pages/CoursesPage";

import AdmissionsPage from "./pages/AdmissionsPage";

import NotFoundPage from "./pages/NotFoundPage";

import "./index.css"; // Import the main CSS file for global styles

import ChatbotComponent from "./components/Chatbot/ChatbotComponent"; // Import the Chatbot component
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App= () => {

  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>

    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Shivaji Satappa Pedanekar"
          studentPhotoUrl="/images/shivaji.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

    <Router>
      <div className="main-layout">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <ChatbotComponent />
        <Footer />
      </div>
    </Router>
    </>
  );
}
export default App;