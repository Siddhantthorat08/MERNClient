import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    // handleChange = (e) => {
    //     this.setState({
    //         firstName: e.target.value,
    //         lastName: e.target.value,
    //         email: e.target.value,
    //         password: e.target.value
    //     })
    // }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

     async register (e){
        e.preventDefault(); 

        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };

        if(this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
            console.log(this.state);
            const response = await axios.post('http://localhost:4000/signup',userData)
            console.log(response);
        }
        else{
            alert("invalid input")
        };
    }

    render() {
        return(
            <div className='container'>
                <form className='form-control'>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="firstName"/>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="lastaName"/>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/>
                    <input type="password" autoComplete='off' name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                    <button type="submit" onSubmit = {this.register} >Register</button>
                    <Link to ="/signin" >Login</Link>        
                </form>
            </div>
        );
    }
}

export default Register;

// const uri = `http://localhost:3000/verify_email_address?token=${_resetEmailToken}`;