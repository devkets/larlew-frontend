import React from 'react';
import ReactDOM from 'react-dom/client';
import MathContainer from './components/math/MathContainer';
import DiceGameContainer from './components/dice/DiceGameContainer';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my React application.</p>
      <div>
        <MathContainer />
      </div>
      <div>
        <DiceGameContainer />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

