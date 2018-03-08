import React from "react";
import { Link, Redirect } from 'react-router-dom';
import superagent from "superagent";
import TextField from "material-ui/TextField"
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography"
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

export class TalentAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            emailAddress: "",
            password: "",
            name: "",
            gender: "",
            categoryId: "021D71E9EE9E4C849111A438C1322DBD",
            errorMessage: ""
        }
    }
    handleEmailAddressChanged(event) {
        this.setState({emailAddress: event.target.value});
    }
    handleNameChanged(event) {
        this.setState({name: event.target.value});
    }
    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }
    handleChange = (event, value) => {
        this.setState({ value });
    }
    submitForm(event) {
        console.log('Submit Form');
        event.preventDefault();
        superagent
        .post('http://www.api.getchatwith.com/api/CreateAppTalent')
        .send({
            EmailAddress: this.state.emailAddress,
            Password: this.state.password,
            Name: this.state.name,
            CategoryId: this.state.categoryId
        })
        .end((err, res) => {
            // console.log('err ', err);
            // console.log('res ', res);
            // console.log('res.body.Error ', res.body.Error);
            if(res.body.Error) {
                console.log('Error!!! ', res.body.Error);
                this.setState({errorMessage: res.body.Response});
                return;
            }
            console.log('Res', res.body.Response);
            this.props.history.push('/app/talent-added');
        });
    }
    render() {
        return(
            <Grid container>
                <Grid item md>
                    <Paper style={{padding: 60}}>
                        <Typography style={{marginBottom: 20}} variant="headline" component="h4">
                            Add Talent
                        </Typography>
                        {this.state.errorMessage &&
                            <Typography color="error">
                                <strong>Error:</strong> {this.state.errorMessage}
                            </Typography>
                        }
                        <form onSubmit={this.submitForm.bind(this)}>
                            <FormControl fullWidth error={this.state.errorMessage ? true : false }>
                                <InputLabel>Talent First Name</InputLabel>
                                <Input value={this.state.name} onChange={this.handleNameChanged.bind(this)} />
                                <FormHelperText>{this.state.errorMessage}</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Talent Last Name</InputLabel>
                                <Input />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                            
                            <FormControl fullWidth error={this.state.errorMessage ? true : false }>
                                <InputLabel>Talent Email Address</InputLabel>
                                <Input value={this.state.emailAddress} onChange={this.handleEmailAddressChanged.bind(this)} />
                                <FormHelperText>{this.state.errorMessage}</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth error={this.state.errorMessage ? true : false }>
                                <InputLabel>Talent Password</InputLabel>
                                <Input type="password" value={this.state.password} onChange={this.handlePasswordChanged.bind(this)} />
                                <FormHelperText>{this.state.errorMessage}</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Talent Birthdate</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    name="gender2"
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Talent Known For (Highlights 2 roles for talent)</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Managers First Name</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Managers Last Name</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Managers Email Address</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Managers Phone Number</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <Typography variant="headline" component="h4" style={{marginTop: 40}}>
                                For Checks
                            </Typography>

                            <FormControl fullWidth>
                                <InputLabel>Mailing Name</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Address Line 1</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Address Line 2</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>City</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>State</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Zip Code</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Country</InputLabel>
                                <Input/>
                                <FormHelperText></FormHelperText>
                            </FormControl>

                            {this.state.errorMessage &&
                                <Typography color="error">
                                    <strong>Error:</strong> {this.state.errorMessage}
                                </Typography>
                            }

                            <Button
                                color="primary"
                                variant="raised"
                                size="large"
                                component={Link}
                                to="/app/talent"
                                style={{marginTop: 10, marginBottom: 10, marginRight: 10}}
                            >
                                Cancel
                            </Button>

                            <Button
                                color="primary"
                                variant="raised"
                                size="large"
                                style={{marginTop: 10, marginBottom: 10}}
                                onClick={this.submitForm.bind(this)}
                            >
                                Submit
                            </Button>
                            
                        </form>
                    
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}