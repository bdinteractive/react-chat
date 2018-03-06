import React from "react";
import superagent from "superagent";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
        superagent
        .post('http://www.api.getchatwith.com/api/AuthenticateAppAdmin')
        .send({EmailAddress: this.state.username, Password: this.state.password})
        .end((err, res) => {
            // console.log('err ', err);
            // console.log('res ', res);
            // console.log('res.body.Error ', res.body.Error);

            // console.log('res.body.Response.ValidAppAdmin ', res.body.Response.ValidAppAdmin);
            // console.log('res.body.Response.Authenticated ', res.body.Response.Authenticated);
            this.setState({
                errorMessage: "",
                emailErrorMessage: "",
                passwordErrorMessage: ""
            })

            if(!res.body.Response.ValidAppAdmin) {
                console.log('emailErrorMessage');
                console.log('res.body.Response.ValidAppAdmin ', res.body.Response.ValidAppAdmin);
                this.setState({
                    emailErrorMessage: "Wrong Email"
                })
                console.log('emailErrorMessage');
            }
            if(!res.body.Response.ValidAppPassword) {
                this.setState({
                    passwordErrorMessage: "Wrong Password"
                })
            }
            
            if(res.body.Error) {
                console.log('Error!!! ', res.body.Error);
                this.setState({errorMessage: res.body.Response});
                return;
            }


            console.log('Res', res.body.Response);
            localStorage.setItem('token', res.body.Response.Token);
            this.props.onSuccessfulLogin();
        });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.submitForm.bind(this)}>

                    <Card>
                        <CardHeader
                        title="Admin Login"
                        />
                        <CardText>
                            <TextField
                                hintText="Email Address"
                                floatingLabelText="Email Address"
                                errorText={this.state.emailErrorMessage}
                                value={this.state.username}
                                onChange={this.handleUsernameChanged.bind(this)}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                type="password"
                                errorText={this.state.passwordErrorMessage}
                                value={this.state.password}
                                onChange={this.handlePasswordChanged.bind(this)}
                            />
                        </CardText>
                        <CardActions>
                            <RaisedButton
                                label="Submit"
                                primary={true}
                                onClick={this.submitForm.bind(this)}
                            />
                        </CardActions>
                    </Card>

                </form>
            </div>
        );
    };
}