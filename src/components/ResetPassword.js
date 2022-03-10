import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class ResetPassword extends React.Component {
    state = {
        newPassword: "",
        confirmPassword: ""
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      async onResetPassword (e){

        e.preventDefault(); 
        const userData = {
            newPassword: this.state.newPassword,
        };

        if(this.state.newPassword === this.state.confirmPassword)
        {
            const response = await axios.post('http://localhost:4000/reset_password',userData)
        }
    }

    render() {
        return(
            <div className='container'>
                <form className='form-control'>
                    <input type="Password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} placeholder="newPassword"/>
                    <input type="Password" autoComplete='off' name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="confirmPassword"/>
                    <button type="submit" onSubmit = {this.onResetPassword} >Submit</button>        
                </form>
            </div>
        );
    }
}

export default ResetPassword;