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
      "File": "",
      "ImagePreviewUrl": "",
      "UploadURL": "",
      "ContentType": "image/jpeg",
      "Preview": "hidden",
    }
  }
  sendImage() {
    console.log("Send Image: ", this.state);
    const config = {
      "Content-Type": this.state.ContentType  
    }
    axios({
      method: 'PUT',
      url: this.state.UploadURL,
      headers: config,
      data: this.state.File
    })
    .then(function(response) {
      console.log(response);
    }.bind(this))
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
      <div>
        <h3>Talent Photo</h3>
        <input 
          type="file" 
          onChange={(e)=>this.handleImageChange(e)}
        />
        <br/>
        <br/>
        <img src={this.state.ImagePreviewUrl} style={{visibility: this.state.Preview, borderRadius: '50%', width: 100, height: 100}} />
      </div>
    );
  }
}

export default ForChecks;