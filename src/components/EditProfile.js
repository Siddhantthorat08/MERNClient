import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditProfile extends React.Component {

    state = {
        firstName: "",
        lastName: ""
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    async onEditProfile (e){

        e.preventDefault(); 
        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };

        if(this.state.FirstName || this.state.LastName)
        {
            const response = await axios.put('http://localhost:4000/edit_profile',userData)
            console.log(response)
        }
    }

    render() {
        return(
            <div>
                <form className='form-control'>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="firstName"/>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="lastaName"/>
                    <button type="submit" onSubmit = {this.onEditProfile} >Submit</button>
                </form>
            </div>    
        )
    }
}

export default EditProfile