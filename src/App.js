import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  render() {

    let subscribers = [
      {
        id: 1,
        name: "Johar Batta",
        phone: "9023239537"
      },
      {
        id: 2,
        name: "Chinmay",
        phone: "9999999999"
      }
    ];

    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}
export default App;