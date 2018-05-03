import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Snackbar from 'material-ui/Snackbar';

import TalentPhoto from './TalentPhoto';
import TalentInfo from './TalentInfo';
import Categories from './Categories';
import ProductTypes from './ProductTypes';
import ManagerInfo from './ManagerInfo';
import ForChecks from './ForChecks';

class EditTalent extends Component {
  constructor() {
    super();
    this.state = {
      "File": "",
      "ImagePreviewUrl": "",
      "UploadURL": "",
      "ContentType": "image/jpeg",
      "Preview": "hidden",
      "EmailAddress": "",
      "Password": "",
      "FirstName": "",
      "LastName": "",
      "Gender": "",
      "KnownFor": "",
      "Birthdate": "",
      "CategoryId": "",
      "ManagerPhone": "",
      "ManagerEmail": "",
      "ManagerFirstName": "",
      "ManagerLastName": "",
      "AddressLine1": "",
      "AddressLine2": "",
      "City": "",
      "State": "",
      "ZipCode": "",
      "Country": "",
      "AppAdminId": "EA21E528CB93415CAFB7D8A1EAC58656",
      "Categories": {},
      "ProductTypes": [],
      "Products": [],
      "ProductOptions": [],
      "PasswordStrength": 0,
      "ErrorMessage": "",
      "SnackBarOpen": false,
      "SnackBarMessage": ""
    }
  }
  componentDidMount() {
    
  }
  submitForm(event) {
    event.preventDefault();
    console.log('Submit Form');
    console.log("State: ", this.state);
    return
    const data = {
      "EmailAddress": this.state.EmailAddress,
      "Password": this.state.Password,
      "FirstName": this.state.FirstName,
      "LastName": this.state.LastName,
      "Gender": this.state.Gender,
      "KnownFor": this.state.KnownFor,
      "Birthdate": this.state.Birthdate,
      "CategoryId": this.state.CategoryId,
      "ContentType": this.state.ContentType,
      "ManagerPhone": this.state.ManagerPhone,
      "ManagerEmail": this.state.ManagerEmail,
      "ManagerFirstName": this.state.ManagerFirstName,
      "ManagerLastName": this.state.ManagerLastName,
      "AddressLine1": this.state.AddressLine1,
      "AddressLine2": this.state.AddressLine2,
      "City": this.state.City,
      "State": this.state.State,
      "ZipCode": this.state.ZipCode,
      "2DigitCountry": this.state.Country,
      // "AppAdminId": this.state.AppAdminId,
      // "ProductOptions": this.state.ProductOptions

      // "EmailAddress": "testerBrad15@testing.com",
      // "Password": "notvalid",
      // "FirstName": "Lloyd",
      // "LastName": "",
      // "Gender": "m",
      // "KnownFor": "Dem tunez",
      // "Birthdate": "1990-06-07",
      // "CategoryId": "021D71E9EE9E4C849111A438C1322DBD",
      // "ContentType": "image/jpeg",
      // "ManagerPhone": "",
      // "ManagerEmail": "test@testing.com",
      // "ManagerFirstName": "Self",
      // "ManagerLastName": "Managed",
      // "AddressLine1": "123 Yellow Brick Rd",
      // "AddressLine2": "N/A",
      // "City": "Nowhere",
      // "State": "Kansas",
      // "ZipCode": "50005",
      // "2DigitCountry":"US",
      "AppAdminId": "EA21E528CB93415CAFB7D8A1EAC58656",
      "ProductOptions":[
        {
          "ProductTypeId":"4B4BAE7301404C8EBC2C8E2D54F8109C",
          "Price": 249.99,
          "Quota":25
        },
        {
          "ProductTypeId":"60E282C60E484A38A84BB2C24E590A0A",
          "Price": 79.99,
          "Quota":10
        }
      ]
    }

    const config = {
      headers: {'Authorization': "bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo"}
    }
    axios({
      method: 'post',
      url: 'http://www.api.getchatwith.com/api/CreateAppTalent',
      headers: config,
      data: data
    })
    .then(function(response) {
      console.log(response.data);
      if(response.data.Error){
        console.log("ERROR!!!");
      } else {
        this.setState({
          "ReferenceConstant": response.data.Response.TalentCreateValue.Response.ReferenceConstant,
          "TalentId": response.data.Response.TalentCreateValue.Response.TalentId,
          "UploadURL": response.data.Response.TalentCreateValue.Response.Url
        })
        this.sendImage();
        this.props.history.push('/app/talent-added');
      }
    }.bind(this))
  }
  render() {
    return(
      <div>
        <Snackbar
          open={this.state.SnackBarOpen}
          message={this.state.SnackBarMessage}
          autoHideDuration={4000}
          // onRequestClose={this.handleRequestClose}
        />
        <Paper style={{padding: '20px 60px 60px', margin: 15}}>
          <h1>Edit Talent</h1>
          {this.state.errorMessage &&
            <h3>
              <strong>Error:</strong> {this.state.errorMessage}
            </h3>
          }
          {/* <RaisedButton
            label="Test Submit"
            primary={true}
            onClick={this.submitForm.bind(this)}
          /> */}
          <ValidatorForm
            ref="form"
            onSubmit={this.submitForm.bind(this)}
            onError={errors => console.log(errors)}
            style={{maxWidth: 800}}
          >
            <TalentPhoto />
            <TalentInfo />    
            <br/>
            <Categories />
            <br/>
            <br/>
            <ProductTypes />
            <br/>
            <br/>
            <ManagerInfo />
            <br/>
            <br/>
            <ForChecks />
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
      </div>
    );
  }
}

export default EditTalent;