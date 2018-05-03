import React from "react";
import { Route, Link } from 'react-router-dom';
import Paper from "material-ui/Paper"
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableSortLabel,
} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import SearchBar from 'material-ui-search-bar'
import Pagination from 'material-ui-pagination';

import OrderList from '../Components/Orders/OrderList';
import OrderList45 from '../Components/Orders/OrderList45';
import OrderList60 from '../Components/Orders/OrderList60';

export class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      all: true,
      fourFive: false,
      sixZero: false
    }
  }
  handleDisplayAll() {
    console.log("ALL");
    this.setState({
      all: true,
      fourFive: false,
      sixZero: false
    })
  }
  handleDisplayFourFive() {
    console.log("45");
    this.setState({
      all: false,
      fourFive: true,
      sixZero: false
    })
  }
  handleDisplaySixZero() {
    console.log("60");
    this.setState({
      all: false,
      fourFive: false,
      sixZero: true
    })
  }
  render() {
    return(
      <Paper style={{padding: '20px 60px 60px', margin: 15}}>
        <h1>Orders</h1>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          hintText="Search Orders"
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
        <br/><br/>
        <Divider />
        <br/>
        <RaisedButton
          primary={true}
          label="All Orders"
          style={{marginTop: 20, marginBottom: 20, marginRight: 10}}
          onClick={this.handleDisplayAll.bind(this)}
        />
        <RaisedButton
          primary={true}
          label="Orders Past 45 Days (Not Fulfilled)"
          style={{marginTop: 20, marginBottom: 20, marginRight: 10}}
          onClick={this.handleDisplayFourFive.bind(this)}
        />
        <RaisedButton
          primary={true}
          label="Orders Past 60 Days (Not Fulfilled)"
          style={{marginTop: 20, marginBottom: 20}}
          onClick={this.handleDisplaySixZero.bind(this)}
        />
        {this.state.all &&
          <OrderList />
        }
        {this.state.fourFive &&
          <OrderList45 />
        }
        {this.state.sixZero &&
          <OrderList60 />
        }
      </Paper>
    );
  }
}