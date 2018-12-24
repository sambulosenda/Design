import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/CustomNavbar';
import Navbar2 from './components/customNavbar2';


class App extends Component {
  render() {
    return (
    <div className ="row">
        <Navbar />
        <Navbar2 />
      </div>
    );
  }
}

export default App;
