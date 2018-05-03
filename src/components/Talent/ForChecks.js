import React, { Component } from "react";
import PropTypes from 'prop-types';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import TextField from "material-ui/TextField"
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import TalentPassword from './TalentPassword';

class ForChecks extends Component {
  constructor() {
    super();
    this.state = {
      "AddressLine1": "",
      "AddressLine2": "",
      "City": "",
      "State": "",
      "ZipCode": "",
      "Country": "",
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
                    onChange={this.handleChange.bind(this)}
                    name="AddressLine1"
                    value={this.state.AddressLine1}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="Address Line 2"
                    onChange={this.handleChange.bind(this)}
                    name="#"
                    value={this.state.AddressLine2}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="City"
                    onChange={this.handleChange.bind(this)}
                    name="City"
                    value={this.state.City}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="State"
                    onChange={this.handleChange.bind(this)}
                    name="State"
                    value={this.state.State}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="Zip"
                    onChange={this.handleChange.bind(this)}
                    name="ZipCode"
                    value={this.state.ZipCode}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
                <br/>
                <TextValidator
                    floatingLabelText="Country"
                    onChange={this.handleChange.bind(this)}
                    name="Country"
                    value={this.state.Country}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth={true}
                />
      </div>
    );
  }
}

export default ForChecks;