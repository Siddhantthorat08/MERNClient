import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ChangePassword extends React.Component {
    state = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      async onChangePassword (e){

        e.preventDefault(); 
        const userData = {
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword,
        };

        if(this.state.newPassword === this.state.confirmPassword)
        {
            const response = await axios.put('http://localhost:4000/change_password',userData)
            console.log(response)
        }
    }

    render () {
        return(
            <div className='container'>
                <form className='form-control'>
                    <input type="Password" name="oldPassword" value={this.state.oldPassword} onChange={this.handleChange} placeholder="old Password"/>
                    <input type="Password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} placeholder="new Password"/>
                    <input type="Password" autoComplete='off' name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="confirmPassword"/>
                    <button type="submit" onSubmit = {this.onChangePassword} >Submit</button>        
                </form>
            </div>
        )
    }
}

export default ChangePassword;