import React, { Component } from 'react'
import User from './User'
import UserConsumer from '../context'


class Users extends Component {
    render() {
      
        
        return (
            <UserConsumer>
                {
                    value =>  {
                        const { users} = value;
                        return (
                            <div>
                                {
                                    //iterate every object in the users array
                                    users.map(user =>{
                                        return(
                                            <User
                                            key={user.id}
                                            id = {user.id}
                                            name = {user.name}
                                            salary = {user.salary}
                                            role= {user.role}                                                        
                                            />
                                        )
                                    })
                                }                
                            </div>
                        )

                    }
                }
            </UserConsumer>
        )
    }
}

export default Users;
