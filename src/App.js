import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import mockData from './mockData';
import './css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <Header/>>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}

export default App;
