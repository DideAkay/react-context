import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
//props drilling, a function is passed to user



  render() {
    
    return (
      <div className="container">
        <Navbar title="User App"/>
        <hr/>
        <AddUser/>  
        <Users/>
           
      </div>
    );
  }
}

export default App;
