import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Register from './Register'
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Homepage from './Homepage';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
class App extends React.Component {
    render() {
        return(
                <div>
                    <Router>
                        <Switch>
                            <Route path = "/" exact component = {Register} />
                            <Route path = "/signin" exact component = {Login} />
                            <Route path = "/signin" exact component = {Login} />
                            <Route path = "/forgot_password" exact component = {ForgotPassword} />
                            <Route path = "/reset_password" exact component = {ResetPassword} />
                            <Route path = "/change_password" exact component = {ChangePassword} />
                            <Route path = "/edit_profile" exact component = {EditProfile} />
                            <Route path = "/home" exact component = {Homepage} />
                        </Switch>
                    </Router>
                </div>
        );
    };
}
export default App;

// MONGO_URI=mongodb://localhost/Siddhant