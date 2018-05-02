import React from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField"
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import LinearProgress from 'material-ui/LinearProgress';
import PasswordField from 'material-ui-password-field';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import ReactS3 from 'react-s3';


const config = {
  bucketName: 'chatwith-dev-talent-profile-pictures',
  albumName: 'ProfilePicture',
  region: 'eu-west-1',
  accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
  secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
}


export class TalentAdd extends React.Component {
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
      this.getCategories();
      this.getProductTypes();
    }
    getCategories() {
      const config = {
        headers: {'Authorization': "bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo"}
      }
      axios({
        method: 'get',
        url: 'http://www.api.getchatwith.com/api/GetAppTalentCategories',
        headers: config
      })
      .then(function(response) {
        this.setState({Categories: response.data.Response});
      }.bind(this))
    }
    getProductTypes() {
      const config = {
        headers: {'Authorization': "bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo"}
      }
      axios({
        method: 'get',
        url: 'http://www.api.getchatwith.com/api/GetProductTypes',
        headers: config
      })
      .then(function(response) {
        this.setState({ProductTypes: response.data.Response});
      }.bind(this))
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
    sendImage() {
      console.log("Send Image: ", this.state);

      const config = {
        "Content-Type": this.state.ContentType  
      }
      axios({
        method: 'put',
        url: this.state.UploadURL,
        headers: config,
        data: this.state.File
      })
      .then(function(response) {
        console.log(response);
      }.bind(this))
    }
    handleQuotaUpdate(event) {
      console.log("Value: ", event.target.value);
      console.log("Value: ", event.target.name);

      this.setState({
        ProductTypes: {
          [event.target.name]: {
            Quota: event.target.value
          }
        }
      })

      //this.state.ProductTypes[event.target.name].Quota = event.target.value;
    }
    handleChange(event) {
      console.log('Handle Change');
      // console.log(event.target.name);
      if(event.target.name == 'Quota'){
        console.log('Quota');
        console.log(event.target.value);
        // this.setState({

        // })
        this.state.ProductTypes[i].Quota
        //console.log(event.target.id);
        // this.setState({
        //   ProductOptions: this.state.ProductOptions.filter(function(id) {
        //     return id.ProductTypeId !== ProductTypeId;
        //   })
        // });
      } else if(event.target.name == 'Price'){
        console.log('Price');
        console.log(event.target.value);
        //console.log(event.target.id);
        // this.setState({
        //   ProductOptions: this.state.ProductOptions.filter(function(id) {
        //     return id.ProductTypeId !== ProductTypeId;
        //   })
        // });
      } else {
        console.log("ELSE");
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      if(event.target.name == 'Password') {
        // this.forceUpdate();
        this.passwordStrengthMeter();
      }
    }
    handleCategoryId(event, index, value) {
      this.setState({
          CategoryId: value
      });
    }
    handleGender(event, value) {
      this.setState({
        Gender: value
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
    handleProductChange(event, isInputChecked) {
      // console.log(event);
      // console.log(isInputChecked);
      // console.log(event.target.value);
      // console.log("State: ", this.state);
      // console.log(this.state.ProductTypes[event.target.value].ProductTypeId);
      
      const ProductIndex = event.target.value;
      // console.log("Index: ", ProductIndex);
      const ProductTypes = this.state.ProductTypes;
      // console.log(ProductTypes);
      const Product = ProductTypes[ProductIndex];
      // console.log(Product);

      const ProductTypeId = this.state.ProductTypes[event.target.value].ProductTypeId;

      if(isInputChecked){
        Product.checked = true;
        // this.setState({
        //   "ProductOptions": [...this.state.ProductOptions, {
        //     "ProductTypeId": this.state.ProductTypes[event.target.value].ProductTypeId,
        //     "Quota": "",
        //     "Price": ""
        //   }]
        // })
      } else {
        Product.checked = false;
        // this.setState({
        //   ProductOptions: this.state.ProductOptions.filter(function(id) {
        //     return id.ProductTypeId !== ProductTypeId;
        //   })
        // });
      }



      // console.log(Product);
      // console.log(ProductTypes);
      ProductTypes[ProductIndex] = Product;
      // console.log(ProductTypes);
      this.setState({
        ProductTypes: ProductTypes
      })
      // console.log(this.state);
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
              <h1>Add Talent</h1>
              {this.state.errorMessage &&
                <h3>
                  <strong>Error:</strong> {this.state.errorMessage}
                </h3>
              }
              <RaisedButton
                label="Test Submit"
                primary={true}
                onClick={this.submitForm.bind(this)}
              />
              <ValidatorForm
                ref="form"
                onSubmit={this.submitForm.bind(this)}
                onError={errors => console.log(errors)}
                style={{maxWidth: 800}}
              >
                <h3>Talent Photo</h3>
                <input 
                  type="file" 
                  onChange={(e)=>this.handleImageChange(e)}
                />
                <br/>
                <br/>
                <img src={this.state.ImagePreviewUrl} style={{visibility: this.state.Preview, borderRadius: '50%', width: 100, height: 100}} />
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
                <br/>
                <SelectField
                    floatingLabelText="Talent Category"
                    value={this.state.CategoryId}
                    name="CategoryId"
                    onChange={this.handleCategoryId.bind(this)}
                    >
                    {Object.keys(this.state.Categories).map(i => (
                        <MenuItem key={i} value={this.state.Categories[i].CategoryId} primaryText={this.state.Categories[i].Description} />
                    ))}
                </SelectField>
                <br/>
                <br/>
                <h4>Products</h4>
                {Object.keys(this.state.ProductTypes).map(i => (
                  <div key={i} id={this.state.ProductTypes[i].ProductTypeId}>
                    <Checkbox
                      label={this.state.ProductTypes[i].Description}
                      value={i}
                      onCheck={this.handleProductChange.bind(this)}
                    />
                    {this.state.ProductTypes[i].checked ? 
                     <div>
                      <TextValidator
                        floatingLabelText="Quota"
                        onChange={this.handleQuotaUpdate.bind(this)}
                        value={this.state.ProductTypes[i].Quota}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        name={i}
                        //name={this.state.ProductTypes[i].quota}
                      />
                      <br/>
                      {/* <TextValidator
                        floatingLabelText="Price"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.ProductTypes[i].Price}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        name="Price"
                        //name={this.state.ProductTypes[i].price}
                      /> */}
                    </div> : ''}
                  </div>
                ))}
                <br/>
                <br/>
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