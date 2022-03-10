import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Login extends React.Component{

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    async login(e) {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        if(!this.state.email || !this.state.password) {
            <div>Please enter the required fields</div>
        }
        const response = await axios.post('http://localhost:4000/signin',userData)
        console.log(response);
    }

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          error: false,
        };
      }
    render() {
        return (
            <div className="container">
                <form className='form-control'>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/>
                    <input type="password" autoComplete='off' name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                    <button type="submit" onSubmit = {this.login} >Register</button>
                </form>
                <Link to = "/" >Regester yourself</Link>
                <br/>
                <Link to = "/forgot_password" >Forgot Password</Link>
            </div>
        );
    }
}

export default Login;