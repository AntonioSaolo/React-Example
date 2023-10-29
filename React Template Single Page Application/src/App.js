import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainContent from './pages/MainContent';
import LoginPage from './pages/Login';
import './App.css';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Aggiunto stato per il login

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="container">
        {isLoggedIn ? (
          <>
            <Header toggleSidebar={toggleSidebar} />
            <div className="content">
              <Sidebar isOpen={isSidebarOpen} />
              <MainContent />
            </div>
            <Footer />
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
