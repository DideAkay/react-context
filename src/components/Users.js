import React, { Component } from 'react'
import User from './User'
import PropTypes from 'prop-types'


class Users extends Component {
    render() {
        const {users, deleteUser} = this.props;
        console.log(users);
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
                            deleteUser = {deleteUser}                            
                            />
                        )
                    })
                }                
            </div>
        )
    }
}

Users.propTypes = {
    users : PropTypes.array.isRequired,
    deleteUser : PropTypes.func.isRequired, //props drilling, a function is passed to user
}
export default Users;
