import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={
        users: [
          {
            id : 1,
            name : 'Ayşe',
            salary: "100",
            role: "engineer"
          },
          {
            id : 2,
            name : 'John',
            salary: "120",
            role: "engineer"
          },
          {
            id : 3,
            name : 'Bella',
            salary: "140",
            role: "engineer"
          }
        ]
    }    

}
//props drilling, a function is passed to user
deleteUser = (id) => {
  this.setState({
   
    users : this.state.users.filter(user => user.id !== id) 
  })
}


  render() {
    
    return (
      <div className="container">
        <Navbar title="User App"/>
        <Users deleteUser = { this.deleteUser} users = {this.state.users}/>     
      </div>
    );
  }
}

export default App;
