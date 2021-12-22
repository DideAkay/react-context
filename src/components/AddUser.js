import React, { Component } from 'react'
import uniqid from 'uniqid'
import UserConsumer from '../context'

class AddUser extends Component {
    state = {
        
        name: "",
        role: '',
        salary: ''
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
                      
        })
        
        
    }  
    addUser  = (dispatch, e) => {
        
            e.preventDefault();
            const {name, salary, role} = this.state;
            const newUser = {
                id: uniqid(),
                name:name,
                salary:salary,
                role:role               

            }
            dispatch({type:"ADD_USER", payload:newUser});       
            
        } 

    render() {
        const {name, salary, role} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className="col-md-8 mb-4">
                            <div className="card">
            
                                <div className="card-header">
                                    <h4> Add User Form</h4>
                                </div>
            
                                <div className="card-body">
                                    
                                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                            type="text"
                                            name="name"
                                            id="id"
                                            placeholder="Enter name"
                                            className="form-control"
                                            value={name}
                                            onChange={this.changeInput} />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="role">Role</label>
                                            <input
                                            type="text"
                                            name="role"
                                            id="role"
                                            placeholder="Enter name"
                                            className="form-control"
                                            value={role}
                                            onChange={this.changeInput} />
                                        </div>
                                    
                                        <div className="form-group">
                                            <label htmlFor="salary">Salary</label>
                                            <input
                                            type="text"
                                            name="salary"
                                            id="salary"
                                            placeholder="Enter name"
                                            className="form-control"
                                            value={salary}
                                            onChange={this.changeInput} />
                                        </div>
            
                                        <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                    </form> 
                                </div>
                                
                                
            
                            </div>                
                        </div>
                    )
                }
            }
        </UserConsumer>

        
    }
}

export default AddUser;
