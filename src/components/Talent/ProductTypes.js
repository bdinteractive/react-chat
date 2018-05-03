import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import TextField from "material-ui/TextField"
import Checkbox from 'material-ui/Checkbox';

class ProductTypes extends Component {
  constructor() {
    super();
    this.state = {
      ProductTypes: ""
    }
  }
  componentDidMount() {
    this.getProductTypes();
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
                  // value={this.state.ProductTypes[i].Quota}
                  validators={['required']}
                  errorMessages={['this field is required']}
                  name={i}
                  //name={this.state.ProductTypes[i].quota}
                />
                <br/>
                <TextValidator
                  floatingLabelText="Price"
                  // onChange={this.handleChange.bind(this)}
                  // value={this.state.ProductTypes[i].Price}
                  validators={['required']}
                  errorMessages={['this field is required']}
                  name="Price"
                  //name={this.state.ProductTypes[i].price}
                />
              </div> : ''}
            </div>
          ))}
      </div>
    )
  }
}

ProductTypes.propTypes = {
  title: PropTypes.string
}

export default ProductTypes;