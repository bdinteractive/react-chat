import React from "react";
import { Link, Redirect } from 'react-router-dom';
import superagent from "superagent";
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField"
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import LinearProgress from 'material-ui/LinearProgress';
import PasswordField from 'material-ui-password-field';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class TalentAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            File: "",
            ImagePreviewUrl: "",
            UploadURL: "",
            Preview: "hidden",
            EmailAddress: "",
            Password: "",
            FirstName: "",
            LastName: "",
            Gender: "m",
            KnownFor: "",
            Birthdate: "",
            // CategoryId: "021D71E9EE9E4C849111A438C1322DBD",
            CategoryId: "",
            Categories: {},
            PasswordStrength: 0,
            ErrorMessage: ""
        }
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories() {
        superagent
        .get('http://www.api.getchatwith.com/api/GetAppTalentCategories')
        .set({'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo'})
        .end((err, res) => {
            if(res.body.Error) { 
                console.log("Error!!!", res.body.Error);
                this.setState({errorMessage: "Authentication Failed"});
                return;
            }
            this.setState({Categories: res.body.Response});
            // console.log(res.body.Response);
            // console.log("State: ", this.state.Categories);
        });
    }
    submitForm(event) {
        // console.log('Submit Form');
        event.preventDefault();
        superagent
        .post('http://www.api.getchatwith.com/api/CreateAppTalent')
        .set({'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo'})
        .send({
            EmailAddress: this.state.EmailAddress,
            Password: this.state.Password,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Gender: this.state.Gender,
            KnownFor: this.state.KnownFor,
            Birthdate: this.state.Birthdate,
            CategoryId: this.state.CategoryId
        })
        .end((err, res) => {
            console.log('err ', err);
            console.log('res ', res);
            console.log('res.body.Error ', res.body.Error);
            if(res.body.Error) {
                console.log('Error!!! ', res.body.Error);
                this.setState({errorMessage: res.body.Response});
                return;
            }
            console.log('Res', res.body.Response);
            
            console.log('Reference Constant: ', res.body.Response.ReferenceConstant);
            console.log('Image URL: ', res.body.Response.Url);

            this.setState({UploadURL: res.body.Response.Url})

            // this.sendImage();

            this.props.history.push('/app/talent-added');
        });
    }
    sendImage() {
        superagent
        .post(this.state.UploadURL)
        .set('Content-Type', 'binary/octet-stream')
        .send(this.state.File)
        .end((err, res) => {
            console.log('err ', err);
            console.log('res ', res);
        })
    }
    handleChange(event) {
        console.log(event);
        console.log("Value", event.target.value);
        console.log("Name", event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log("State", this.state);
        if(event.target.name == 'Password') {
            // this.forceUpdate();
            this.passwordStrengthMeter();
        }
    }
    handleSelectChange(event, index, value) {
        console.log(event);
        console.log(index);
        console.log(value);
        this.setState({
            CategoryId: value
        });
    }
    passwordStrengthMeter() {
        const pass_val = this.state.Password;
        const strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        const mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        const okRegex = new RegExp("(?=.{6,}).*", "g");

        if(okRegex.test(pass_val) === false){
            this.setState({PasswordStrength: 20})
        }else if(strongRegex.test(pass_val)){
            this.setState({PasswordStrength: 100})
        }else if(mediumRegex.test(pass_val)){
            this.setState({PasswordStrength: 80})
        }else{
            this.setState({PasswordStrength: 80})
        }
    }
    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                File: file,
                ImagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
        this.setState({Preview: "visible"})
    }
    render() {
        return(
            <Paper style={{padding: '20px 60px 60px', margin: 15}}>
                <h1>Add Talent</h1>

                {this.state.errorMessage &&
                    <h3>
                        <strong>Error:</strong> {this.state.errorMessage}
                    </h3>
                }

                <ValidatorForm
                    ref="form"
                    onSubmit={this.submitForm.bind(this)}
                    onError={errors => console.log(errors)}
                    style={{maxWidth: 800}}
                >
                    {/* <RaisedButton
                        label="Upload Photo"
                        style={{margin: '20px 0 20px'}}
                        backgroundColor="#e0e0e0"
                        type="file"
                        onChange={(e)=>this.handleImageChange(e)}
                    /> */}
                    <input 
                        type="file" 
                        onChange={(e)=>this.handleImageChange(e)}
                    />
                    <br/>
                    <br/>
                    <img src={this.state.ImagePreviewUrl} style={{visibility: this.state.Preview, borderRadius: '50%', width: 100, height: 100}} />
                    <TextValidator
                        floatingLabelText="Talent First Name"
                        onChange={this.handleChange.bind(this)}
                        name="FirstName"
                        value={this.state.FirstName}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Talent Last Name"
                        onChange={this.handleChange.bind(this)}
                        name="LastName"
                        value={this.state.LastName}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Email"
                        onChange={this.handleChange.bind(this)}
                        name="EmailAddress"
                        value={this.state.EmailAddress}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                        fullWidth={true}
                    />
                    <br/>
                    {/* <TextValidator
                        floatingLabelText="Talent Password"
                        onChange={this.handleChange.bind(this)}
                        name="Password"
                        type="password"
                        value={this.state.Password}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <h5>Password Strength</h5>
                    <LinearProgress mode="determinate" value={20} />
                    <br/> */}
                    <div>
                        <div style={{width:'60%',float: 'left'}}>
                            <PasswordField
                                hintText="At least 8 characters including a symbol, uppercase and lowercase"
                                floatingLabelText="Talent Password"
                                // errorText="Password is too short"
                                fullWidth
                                name="Password"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.Password}
                            />
                        </div>
                        <div style={{width:'30%',float: 'right'}}>
                            <h5>Password Strength</h5>
                            <LinearProgress mode="determinate" value={this.state.PasswordStrength} />
                        </div>
                    </div>
                    <TextValidator
                        floatingLabelText="Talent Birthdate"
                        onChange={this.handleChange.bind(this)}
                        name="Birthdate"
                        value={this.state.Birthdate}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <br/>
                    <RadioButtonGroup name="gender">
                        <RadioButton
                            value="male"
                            label="Male"
                        />
                        <RadioButton
                            value="female"
                            label="Female"
                        />
                    </RadioButtonGroup>
                    <TextValidator
                        floatingLabelText="Talent Known For (Highlights 2 roles for talent)"
                        onChange={this.handleChange.bind(this)}
                        name="KnownFor"
                        value={this.state.KnownFor}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <SelectField
                        floatingLabelText="Talent Category"
                        value={this.state.CategoryId}
                        name="CategoryId"
                        onChange={this.handleSelectChange.bind(this)}
                        >
                        {Object.keys(this.state.Categories).map(i => (
                            <MenuItem key={i} value={this.state.Categories[i].CategoryId} primaryText={this.state.Categories[i].Description} />
                        ))}
                    </SelectField>
                    <br/>
                    <br/>
                    <h3>Managers Information</h3>
                    <TextValidator
                        floatingLabelText="Managers First Name"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Managers Last Name"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Managers Email Address"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Managers Phone Number"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <br/>
                    <h3>For Checks</h3>
                    <TextValidator
                        floatingLabelText="Mailing Name"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Address Line 1"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Address Line 2"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="City"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="State"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Zip"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <TextValidator
                        floatingLabelText="Country"
                        // onChange={this.handleChange.bind(this)}
                        name="#"
                        // value={this.state.ManagersLastName}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        fullWidth={true}
                    />
                    <br/>
                    <RaisedButton
                        type="submit"
                        label="Submit"
                        primary={true}
                        style={{margin: '40px 15px 0 0'}}
                    />
                    <RaisedButton
                        label="Cancel"
                        style={{marginTop: 40}}
                        containerElement={<Link to="/app/talent" />}
                    />
                </ValidatorForm>

            </Paper>


            // <Grid container>
            //     <Grid item md>
            //         <Paper style={{padding: 60}}>
            //             <Typography style={{marginBottom: 20}} variant="headline" component="h4">
            //                 Add Talent
            //             </Typography>
            //             {this.state.errorMessage &&
            //                 <Typography color="error">
            //                     <strong>Error:</strong> {this.state.errorMessage}
            //                 </Typography>
            //             }
            //             <form onSubmit={this.submitForm.bind(this)}>
            //                 <FormControl fullWidth error={this.state.errorMessage ? true : false }>
            //                     <InputLabel>Talent First Name</InputLabel>
            //                     <Input value={this.state.name} onChange={this.handleNameChanged.bind(this)} />
            //                     <FormHelperText>{this.state.errorMessage}</FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Talent Last Name</InputLabel>
            //                     <Input />
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>
                            
            //                 <FormControl fullWidth error={this.state.errorMessage ? true : false }>
            //                     <InputLabel>Talent Email Address</InputLabel>
            //                     <Input value={this.state.emailAddress} onChange={this.handleEmailAddressChanged.bind(this)} />
            //                     <FormHelperText>{this.state.errorMessage}</FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth error={this.state.errorMessage ? true : false }>
            //                     <InputLabel>Talent Password</InputLabel>
            //                     <Input type="password" value={this.state.password} onChange={this.handlePasswordChanged.bind(this)} />
            //                     <FormHelperText>{this.state.errorMessage}</FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Talent Birthdate</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl component="fieldset">
            //                     <FormLabel component="legend">Gender</FormLabel>
            //                     <RadioGroup
            //                         name="gender2"
            //                         value={this.state.gender}
            //                         onChange={this.handleChange}
            //                     >
            //                         <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            //                         <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            //                     </RadioGroup>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Talent Known For (Highlights 2 roles for talent)</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Managers First Name</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Managers Last Name</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Managers Email Address</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Managers Phone Number</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <Typography variant="headline" component="h4" style={{marginTop: 40}}>
            //                     For Checks
            //                 </Typography>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Mailing Name</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Address Line 1</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Address Line 2</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>City</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>State</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Zip Code</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 <FormControl fullWidth>
            //                     <InputLabel>Country</InputLabel>
            //                     <Input/>
            //                     <FormHelperText></FormHelperText>
            //                 </FormControl>

            //                 {this.state.errorMessage &&
            //                     <Typography color="error">
            //                         <strong>Error:</strong> {this.state.errorMessage}
            //                     </Typography>
            //                 }

            //                 <Button
            //                     color="primary"
            //                     variant="raised"
            //                     size="large"
            //                     component={Link}
            //                     to="/app/talent"
            //                     style={{marginTop: 10, marginBottom: 10, marginRight: 10}}
            //                 >
            //                     Cancel
            //                 </Button>

            //                 <Button
            //                     color="primary"
            //                     variant="raised"
            //                     size="large"
            //                     style={{marginTop: 10, marginBottom: 10}}
            //                     onClick={this.submitForm.bind(this)}
            //                 >
            //                     Submit
            //                 </Button>
                            
            //             </form>
                    
            //         </Paper>
            //     </Grid>
            // </Grid>
        );
    }
}