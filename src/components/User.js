import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'


class User extends Component {

    constructor(props) {
        super(props);
        //binding in the constructor
        //this.onClickEvent=this.onClickEvent.bind(this);

        this.state={
            isVisible: true
        }
    }
    //binding is done with arrow function
    //event is read in the end so it is written in the end as an argument
    onClickEvent = (number, e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
        
        //console.log(this);
        //console.log(number);         
    }

    onDeleteUser = (dispatch ,e) => {
        const {id} = this.props;
        //Consumer dispatch
        dispatch({type:"DELETE_USER", payload: id});
    }
    render() {
        //Destructing
    const {name,role}=this.props;
    const {isVisible}=this.state;
    return (
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">                        
                                    <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>{name}</h4> 
                                    <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="fas fa-trash" style={{cursor: 'pointer'}}></i>
                                </div>
                            </div>
                            {
                                //Condition
                                isVisible ? <div className="card-body">
                                <p className="card-text">Salary: {this.props.salary}</p> 
                                <p className="card-text">Role: {this.props.role}</p>
                                
                                </div> : null
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )

    }
}

User.defaultProps = {
    name: 'Default',
    salary: 'Default',
    role: 'Default'
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
    
}
export default User;