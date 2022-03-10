import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class ForgotPassword extends React.Component {
    state = {
        email: "",
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      async onForgotPassword (e){

        e.preventDefault(); 
        const userData = {
            email: this.state.email
        };

        if(!this.state.email)
        {
            return(
                <div>Please Enter the email</div>
            )
        }

        const response = await axios.post('http://localhost:4000/forgot_password',userData)

        console.log(response);
        
    }

    render() {
        return(
            <div className='container'>
                <form className='form-control'>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/>
                    <button type="submit" onSubmit = {this.onForgotPassword} >Submit</button>       
                </form>
                <Link to = "/signin" >Login</Link>
            </div>
        );
    }
}

export default ForgotPassword;