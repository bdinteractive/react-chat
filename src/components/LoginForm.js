import React from "react";
import superagent from "superagent";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

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
                // console.log('emailErrorMessage');
                //console.log('res.body.Response.ValidAppAdmin ', res.body.Response.ValidAppAdmin);
                this.setState({
                    emailErrorMessage: "Wrong Email"
                })
                // console.log('emailErrorMessage');
            }
            if(!res.body.Response.ValidAppPassword) {
                this.setState({
                    passwordErrorMessage: "Wrong Password"
                })
            }
            
            if(res.body.Error) {
                // console.log('Error!!! ', res.body.Error);
                this.setState({errorMessage: res.body.Response});
                return;
            }
            // console.log('Res', res.body.Response);
            localStorage.setItem('token', res.body.Response.Token);
            this.props.onSuccessfulLogin();
        });
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }
    render() {
        return(
            <Grid
                item
                xs={12}
            >
                <Card style={{marginTop: 60}}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            Admin Login
                        </Typography>
                        <FormControl fullWidth error={this.state.emailErrorMessage ? true : false }>
                            <InputLabel>Email Address</InputLabel>
                            <Input value={this.state.username} onChange={this.handleUsernameChanged.bind(this)} />
                            <FormHelperText id="name-error-text">{this.state.emailErrorMessage}</FormHelperText>
                        </FormControl>

                        <FormControl fullWidth error={this.state.passwordErrorMessage ? true : false }>
                            <InputLabel>Password</InputLabel>
                            <Input type="password" value={this.state.password} onChange={this.handlePasswordChanged.bind(this)} />
                            <FormHelperText id="name-error-text">{this.state.passwordErrorMessage}</FormHelperText>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="raised"
                            color="primary"
                            style={{marginBottom: 20}}
                            onClick={this.submitForm.bind(this)}
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    };
}