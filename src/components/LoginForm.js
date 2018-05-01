import React from "react";
import axios from "axios";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            emailErrorMessage: "",
            passwordErrorMessage: ""
        }
    }
    handleUsernameChanged(event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }
    submitForm(event) {
        event.preventDefault();
        let self = this;
        this.setState({
            errorMessage: "",
            emailErrorMessage: "",
            passwordErrorMessage: ""
        })
        axios({
            method: 'post',
            url: 'http://www.api.getchatwith.com/auth/AuthenticateAppAdmin',
            data: {
                EmailAddress: this.state.username,
                Password: this.state.password
            }
        })
        .then(function (response) {
            if(response.data.Response.ValidAppAdmin && response.data.Response.Authenticated) {
                localStorage.setItem('token', response.data.Response.Token);
                self.props.onSuccessfulLogin();
            } else if(!response.data.Response.ValidAppAdmin) {
                self.setState({
                    emailErrorMessage: "Invalid Email"
                })
            } else if(!response.data.Response.Authenticated) {
                self.setState({
                    passwordErrorMessage: "Incorrect Password"
                })
            }
        })
        .catch(function (error) {
            console.log("error: ", error);
        })
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }
    render() {
        return(
            <form onSubmit={this.submitForm.bind(this)}>
                <Card style={{margin: '60px auto 0 auto', padding: 20, maxWidth: 400}}>
                    <CardText>
                        <h2 style={{marginBottom: 20}}>
                            Admin Login
                        </h2>
                        <TextField
                            hintText="Email Address"
                            errorText={this.state.emailErrorMessage}
                            value={this.state.username}
                            onChange={this.handleUsernameChanged.bind(this)}
                            style={{marginBottom: 10}}
                        />
                        <br/>
                        <TextField
                            hintText="Password"
                            type="password"
                            errorText={this.state.passwordErrorMessage}
                            value={this.state.password}
                            onChange={this.handlePasswordChanged.bind(this)}
                        />
                    </CardText>
                    <CardActions>
                        <RaisedButton
                            primary={true}
                            label="Submit"
                            style={{marginBottom: 20}}
                            onClick={this.submitForm.bind(this)}
                        />
                    </CardActions>
                </Card>
            </form>
        );
    };
}