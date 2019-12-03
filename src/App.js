import React from 'react';
import Header from './Header.js';
import './App.css';

function App() {
  return (
    <div>
    <Header />
    <div className="component-body-container">
      <button className="custom-btn add-btn">Add</button>

      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      </div>
    </div>
  );
}

export default App;
