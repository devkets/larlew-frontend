import React, { useState } from 'react';
import MathContainer from './math/MathContainer';
import DiceGameContainer from './dice/DiceGameContainer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#ffffff',
    borderRight: '2px solid #e0e0e0',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  };

  const navLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const linkStyle = {
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    textDecoration: 'none',
    color: '#333',
    backgroundColor: '#f9f9f9',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontWeight: '500',
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#007bff',
    color: '#fff',
    borderColor: '#007bff',
  };

  const mainContentStyle = {
    flex: 1,
    padding: '40px',
  };

  const headerStyle = {
    marginBottom: '30px',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 10px 0',
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#666',
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <h2 style={{ marginTop: 0, color: '#333' }}>Navigation</h2>
        <nav style={navLinksStyle}>
          <a
            href="#home"
            style={activeSection === 'home' ? activeLinkStyle : linkStyle}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
          >
            Home
          </a>
          <a
            href="#math"
            style={activeSection === 'math' ? activeLinkStyle : linkStyle}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('math');
            }}
          >
            Math
          </a>
          <a
            href="#dice"
            style={activeSection === 'dice' ? activeLinkStyle : linkStyle}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('dice');
            }}
          >
            Dice Game
          </a>
          <a
            href="#about"
            style={activeSection === 'about' ? activeLinkStyle : linkStyle}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('about');
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={activeSection === 'contact' ? activeLinkStyle : linkStyle}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
          >
            Contact
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={mainContentStyle}>
        {activeSection === 'home' && (
          <div style={headerStyle}>
            <h1 style={titleStyle}>Welcome to the Math</h1>
            <p style={subtitleStyle}>A confused look at math and math things</p>
          </div>
        )}

        {activeSection === 'math' && (
          <div>
            <div style={headerStyle}>
              <h1 style={titleStyle}>Math Exercises</h1>
            </div>
            <MathContainer />
          </div>
        )}

        {activeSection === 'dice' && (
          <div>
            <div style={headerStyle}>
              <h1 style={titleStyle}>Dice Game</h1>
            </div>
            <DiceGameContainer />
          </div>
        )}

        {activeSection === 'about' && (
          <div style={headerStyle}>
            <h1 style={titleStyle}>About</h1>
            <p style={subtitleStyle}>This is the about page.</p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div style={headerStyle}>
            <h1 style={titleStyle}>Contact</h1>
            <p style={subtitleStyle}>Get in touch with us.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;