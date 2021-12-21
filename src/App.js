import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    
}
//props drilling, a function is passed to user



  render() {
    
    return (
      <div className="container">
        <Navbar title="User App"/>
        <Users/>     
      </div>
    );
  }
}

export default App;
