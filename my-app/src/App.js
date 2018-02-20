import React, { Component } from 'react';
import logo from './target.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">KC Planet COMICON Clicky Game!</h1>
          <h5 id='result'>Click on an character to begin!</h5>
        </header>

      </div>
    );
  }
}

export default App;
