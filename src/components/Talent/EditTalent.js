import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

import { fetchTalentAttributes } from '../../actions/talentActions';

class EditTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // "FirstName": this.props.talentAttributes.attributes.DatabaseValue.Response.TalentAttributes[0].FirstName
      // talentAttributes: this.props.talentAttributes
    }
  }
  componentDidMount() {
    this.props.fetchTalentAttributes();
  }
  componentWillReceiveProps() {
    console.log("CWRP");
    // console.log("Talent Info:", this.props.talentAttributes.attributes.DatabaseValue.Response.TalentAttributes[0]);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log("Talent Info:", this.props.talentAttributes.attributes.DatabaseValue.Response.TalentAttributes[0]);
    // this.setState({
    //   "talentAttributes": this.props.talentAttributes.attributes.DatabaseValue.Response.TalentAttributes[0]
    // })
  }
  submitForm() {
    console.log("Talet: ", this.props.talentAttributes.attributes.DatabaseValue.Response.TalentAttributes[0].FirstName);
    // this.setState({
    //   "FirstName": this.props.talentAttributes.attributes.DatabaseValue.Response.TalentAttributes[0].FirstName,
    //   "LastName": this.props.talentAttributes.attributes.DatabaseValue.Response.TalentAttributes[0].LastName
    // })
    // console.log("Talet State: ", this.state.talentAttributes);
  }
  render() {
    // const databaseValue = this.props.talentAttributes.attributes.DatabaseValue;
    // const talentName = (
    //   <h2>{databaseValue.TalentAttributes[0].FirstName}</h2>
    // );
    return(
      <div>
        <Paper style={{padding: '20px 60px 60px', margin: 15}}>
          <h1>Edit Talent: {this.state.FirstName} {this.state.LastName}</h1>
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
            <TalentPhoto />
            <TalentInfo talentInfo={this.state.talentAttributes} />    
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


const mapStateToProps = state => ({
  talentAttributes: state.talentAttributes,
});

export default connect(mapStateToProps, { fetchTalentAttributes })(EditTalent);