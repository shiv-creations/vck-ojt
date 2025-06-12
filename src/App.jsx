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

import ChatbotComponent from "./components/ChatBot/ChatbotComponents";

function App() {
  return (
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
  );
}
export default App;