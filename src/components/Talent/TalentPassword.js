import React, { Component } from "react";
import PropTypes from 'prop-types';

import LinearProgress from 'material-ui/LinearProgress';
import PasswordField from 'material-ui-password-field';

class TalentPassword extends Component {
  constructor() {
    super();
    this.state = {
      "PasswordStrength": 0,
      "Password": ""
    }
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
  handleChange(event) {
    this.passwordStrengthMeter();
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return(
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
    );
  }
}

export default TalentPassword;