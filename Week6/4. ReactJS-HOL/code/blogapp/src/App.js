// src/App.js
import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center-container">
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
