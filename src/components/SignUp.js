import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SignIn from "./SignIn";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            re_password: ''
        }
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value });
    }

    checkPassword() {
        if (!this.state.password || this.state.password != this.state.re_password) {
            alert('Confirm password wrong ! Please try again !');
        }
    }

    render() {
        return (

            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" required="true" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" required="true" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        required="true"
                        placeholder="Enter password"
                        name="password"
                        // value={this.state.password}
                        onKeyUp={(event) => {
                            this.handleChange(event)
                        }}
                         />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        required="true"
                        placeholder="Enter password again"
                        name="re_password"
                        // value={this.state.re_password}
                        onKeyUp={(event) => {
                            this.handleChange(event)
                        }} 
                        />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={()=> this.checkPassword()}>Sign Up</button>
                <p className="forgot-password text-right" style={{}}>
                    Already registered ?
                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </p>

                <div>
                    <Route path="/sign-in" component={SignIn} />
                </div>
            </form>

        );
    }
}