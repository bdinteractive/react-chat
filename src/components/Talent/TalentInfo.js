import React, { Component } from "react";
import PropTypes from 'prop-types';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import TextField from "material-ui/TextField"
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import TalentPassword from './TalentPassword';

class TalentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "EmailAddress": "",
      "FirstName": "",
      "LastName": "",
      "Gender": "",
      "KnownFor": "",
      "Birthdate": "",
    }
  }
  componentWillMount() {

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleGender(event, value) {
    this.setState({
      Gender: value
    });
  }
  render() {
    return(
      <div>
        <h3>Talent Info</h3>
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

                <TalentPassword />

                <TextValidator
                  floatingLabelText="Talent Birthdate"
                  hintText="Must be in format 1990-01-01"
                  onChange={this.handleChange.bind(this)}
                  name="Birthdate"
                  value={this.state.Birthdate}
                  validators={['required']}
                  errorMessages={['this field is required']}
                  fullWidth={true}
                />
                <br/>
                <br/>
                <RadioButtonGroup
                  name="gender"
                  onChange={this.handleGender.bind(this)}
                >
                  <RadioButton
                    value="m"
                    label="Male"
                  />
                  <RadioButton
                    value="f"
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
      </div>
    );
  }
}

export default TalentInfo;