import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return{
                ...state, //spread operator: copies the previous state here 
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return{
                ...state, //spread operator:
                users: [...state.users,action.payload]
            }
        default:
            return state
    }
}

export class UserProvider extends Component {
    state={
        users: [
          {
            id : "1",
            name : 'Ayşe',
            salary: "100",
            role: "engineer"
          },
          {
            id : "2",
            name : 'John',
            salary: "120",
            role: "engineer"
          },
          {
            id : "3",
            name : 'Bella',
            salary: "140",
            role: "engineer"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
    }
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}                
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

