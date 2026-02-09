import React, { useState } from 'react';
import MathContainer from './math/MathContainer';
import DiceGameContainer from './dice/DiceGameContainer';
import Weather from './weather/weather';
import '../styles/home.scss';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Navigation</h2>
        <nav className="nav-links">
          <a
            href="#home"
            className={`link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
          >
            Home
          </a>
          <a
            href="#math"
            className={`link ${activeSection === 'math' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('math');
            }}
          >
            Math
          </a>
          <a
            href="#dice"
            className={`link ${activeSection === 'dice' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('dice');
            }}
          >
            Dice Game
          </a>
          <a
            href="#about"
            className={`link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('about');
            }}
          >
            About
          </a>
          <a
            href="#contact"
            className={`link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
          >
            Contact
          </a>
          <a
            href="#weather"
            className={`link ${activeSection === 'weather' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('weather');
            }}
          >
            Weather
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeSection === 'home' && (
          <div className="header">
            <h1 className="title">Welcome to the Math</h1>
            <p className="subtitle">A confused look at math and math things</p>
          </div>
        )}

        {activeSection === 'math' && (
          <div>
            <div className="header">
              <h1 className="title">Math Exercises</h1>
            </div>
            <MathContainer />
          </div>
        )}

        {activeSection === 'dice' && (
          <div>
            <div className="header">
              <h1 className="title">Dice Game</h1>
            </div>
            <DiceGameContainer />
          </div>
        )}

        {activeSection === 'about' && (
          <div className="header">
            <h1 className="title">About</h1>
            <p className="subtitle">This is the about page.</p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="header">
            <h1 className="title">Contact</h1>
            <p className="subtitle">Get in touch with us.</p>
          </div>
        )}

        {activeSection === 'weather' && (
          <div>
            <div className="header">
              <h1 className="title">Weather</h1>
            </div>
            <Weather />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;