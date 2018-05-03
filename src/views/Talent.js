import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Pagination from 'material-ui-pagination';
import Paper from "material-ui/Paper"
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem} from 'material-ui/List';
import SearchBar from 'material-ui-search-bar';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { fetchTalentList } from '../actions/talentActions';

class Talent extends Component {
  constructor() {
    super();
    // this.handlePagination.bind(this);
  }
  componentWillMount() {
    this.props.fetchTalentList();
  }
  handlePagination(number) {
    console.log(number);
  }
  render() {
    const talentItems = this.props.talentList.map(item => (
      <TableRow key={item.TalentId}>
        <TableRowColumn>{item.FirstName} {item.LastName}</TableRowColumn>
        <TableRowColumn>{item.Subscribers}</TableRowColumn>
        <TableRowColumn>{item.PendingOrders}</TableRowColumn>
        <TableRowColumn>{item.FulfilledOrders}</TableRowColumn>
        <TableRowColumn>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem
              primaryText="Edit Talent"
              containerElement={<Link to="/app/talent-edit" />}
            />
            <MenuItem primaryText="Schedule One-On-One Chat" />
            <MenuItem primaryText="View Talent Feed" />
            <MenuItem primaryText="Delete Talent" />
          </IconMenu>
        </TableRowColumn>
      </TableRow>
    ));
    return(
      <Paper style={{padding: '20px 60px 60px', margin: 15}}>
        <h1>Talent</h1>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          hintText="Search Talent"
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
          label="Add Talent"
          style={{marginTop: 20, marginBottom: 20}}
          containerElement={<Link to="/app/talent-add" />}
        />
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Talent</TableHeaderColumn>
              <TableHeaderColumn>Subscribers</TableHeaderColumn>
              <TableHeaderColumn>Pending Orders</TableHeaderColumn>
              <TableHeaderColumn>Fullfield Orders</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {talentItems}
          </TableBody>
        </Table>
        <br />
        <Pagination
          total={20}
          current={1}
          display={10}
          onChange={number => this.handlePagination({number})}
        />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  talentList: state.talentList.items
});

export default connect(mapStateToProps, { fetchTalentList })(Talent);