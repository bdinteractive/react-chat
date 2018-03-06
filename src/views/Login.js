import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Redirect } from "react-router-dom";

export class Login extends React.Component {
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    handleSuccessfulLogin() {
        this.forceUpdate();
    }
    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        return(
            <div>
                {isAlreadyAuthentacated ? <Redirect to={{pathname: '/app/dashboard'}}/> : (
                    <LoginForm onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} />
                )}
            </div>
        );
    }
}