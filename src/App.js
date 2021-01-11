import React, { Component } from 'react';
import './App.css';
import Mhome from './Mhome/mhome';
import Location from './Location/location';
import Navigation from './components/Navbar';
import Routes from './Routes';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-content">
          
          <Routes/>
        </div>
      </div>
    );
  }
}

export default App;
