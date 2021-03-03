 import React, { Component } from 'react';
 import {Link, useRouteMatch} from "react-router-dom";
 import '../style/Signup.css'

 class Signup extends Component {

    handleSubmit = e => {
        e.preventDefault(); //Disable refresh/relaod
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword
        };
        console.log(data);
        //Implement axios
        //this.props.history.push('/');//Force push
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign up</h3>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" 
                        onChange={e => this.firstName = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" 
                        onChange={e => this.lastName = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email" 
                    onChange={e => this.email = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" 
                    onChange={e => this.password = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" 
                    onChange={e => this.confirmPassword = e.target.value}/>
                </div>
                <button className="btn btn-primary btn-block">Sign up</button>
            </form>
        );
    }
}
export default Signup;