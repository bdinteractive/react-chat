import React, { Component } from "react";
import PropTypes from 'prop-types';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import TextField from "material-ui/TextField"
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import TalentPassword from './TalentPassword';

class ManagerInfo extends Component {
  constructor() {
    super();
    this.state = {
      "ManagerPhone": "",
      "ManagerEmail": "",
      "ManagerFirstName": "",
      "ManagerLastName": "",
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return(
      <div>
        <h3>Managers Information</h3>
                <TextValidator
                    floatingLabelText="Managers First Name"
                    onChange={this.handleChange.bind(this)}
                    name="ManagerFirstName"
                    value={this.state.ManagerFirstName}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="Managers Last Name"
                    onChange={this.handleChange.bind(this)}
                    name="ManagerLastName"
                    value={this.state.ManagerLastName}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="Managers Email Address"
                    onChange={this.handleChange.bind(this)}
                    name="ManagerEmail"
                    value={this.state.ManagerEmail}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="Managers Phone Number"
                    onChange={this.handleChange.bind(this)}
                    name="ManagerPhone"
                    value={this.state.ManagerPhone}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
      </div>
    );
  }
}

export default ManagerInfo;