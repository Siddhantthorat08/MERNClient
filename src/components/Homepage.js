import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
        <div>
            <Link to ="/reset_password" >Reset Password</Link>
            <br/>
            <Link to ="/change_password" >Change Password</Link>
            <br/>
            <Link to ="/edit_profile" >Edit Profile</Link>
        </div>
    )
}

export default Homepage