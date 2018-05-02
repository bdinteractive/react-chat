import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      Categories: "",
      CategoryId: ""
    }
  }
  componentDidMount() {
    this.getCategories();
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
  handleCategoryId(event, index, value) {
    this.setState({
        CategoryId: value
    });
  }
  render() {
    return(
      <div>
        <h4>Talent Category</h4>
        <SelectField
          floatingLabelText="Categories"
          value={this.state.CategoryId}
          name="CategoryId"
          onChange={this.handleCategoryId.bind(this)}
          >
          {Object.keys(this.state.Categories).map(i => (
              <MenuItem key={i} value={this.state.Categories[i].CategoryId} primaryText={this.state.Categories[i].Description} />
          ))}
        </SelectField>
      </div>
    )
  }
}

Categories.propTypes = {
  title: PropTypes.string
}

export default Categories;