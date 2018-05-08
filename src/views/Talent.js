import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Pagination from 'material-ui-pagination';
import Paper from "material-ui/Paper"
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import CircularProgress from 'material-ui/CircularProgress';

import FontIcon from 'material-ui/FontIcon';
import Create from 'material-ui/svg-icons/content/create';
import AddToQueue from 'material-ui/svg-icons/av/add-to-queue';
import CastConnected from 'material-ui/svg-icons/hardware/cast-connected';
import Delete from 'material-ui/svg-icons/action/delete';
import Clear from 'material-ui/svg-icons/content/clear';
import PersonAdd from 'material-ui/svg-icons/social/person-add';

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

import { fetchTalentLanding, fetchTalentSearch } from '../actions/talentActions';

class Talent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "searchTerm": "",
      "searchType": "FirstName",
      "landing": true,
      "search": false,
      "feed": false
    }
  }
  componentWillMount() {
    this.props.fetchTalentLanding();
  }
  handlePagination(number) {
    console.log(number);
  }
  handleSearch() {
    const search = {
      searchTerm: this.state.searchTerm,
      searchType: this.state.searchType
    }
    this.props.fetchTalentSearch(search);
    this.setState({
      "landing": false,
      "search": true
    })
  }
  clearSearch() {
    this.setState({
      "landing": true,
      "search": false
    })
  }
  handleTalentFeed(event, child) {
    console.log("child: ", child.props.value);
  }
  render() {
    const talent = this.props.talentLanding.map(item => (
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
            onItemClick={this.handleTalentFeed.bind(this)}
          >
            <MenuItem
              primaryText="Edit Talent"
              containerElement={<Link to="/app/talent-edit" />}
              leftIcon={<Create />}
            />
            <MenuItem 
              primaryText="Schedule One-On-One Chat" 
              leftIcon={<AddToQueue />}
            />
            <MenuItem 
              value={item.TalentId}
              primaryText="View Talent Feed"
              containerElement={<Link to={{pathname: "/app/talent-feed", query: {talentId: item.TalentId}}} />}
              leftIcon={<CastConnected />}
            />
            <MenuItem 
              primaryText="Delete Talent" 
              leftIcon={<Delete />}
            />
          </IconMenu>
        </TableRowColumn>
      </TableRow>
    ));
    const search = this.props.talentSearch.map(item => (
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
              leftIcon={<Create />}
            />
            <MenuItem
              primaryText="Schedule One-On-One Chat"
              leftIcon={<AddToQueue />}
            />
            <MenuItem 
              value={item.TalentId}
              primaryText="View Talent Feed"
              containerElement={<Link to={{pathname: "/app/talent-feed", query: {talentId: item.TalentId}}} />}
              leftIcon={<CastConnected />}
            />
            <MenuItem
              primaryText="Delete Talent"
              leftIcon={<Delete />}
            />
          </IconMenu>
        </TableRowColumn>
      </TableRow>
    ));
    return(
      <Paper style={{padding: '20px 60px 60px', margin: 15}}>
        <h1>Talent</h1>
        <SearchBar
          onChange={(value) => this.setState({searchTerm: value})}
          onRequestSearch={this.handleSearch.bind(this)}
          hintText="Search Talent"
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
        <br/>
        {/* <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu> */}
        <br/><br/>
        <Divider />
        <br/>
        {this.state.search &&
          <FlatButton
            primary={true}
            label="Clear Search"
            style={{marginTop: 20, marginBottom: 20, marginRight: 10}}
            onClick={this.clearSearch.bind(this)}
            icon={<Clear/>}
          />
        }
        <RaisedButton
          primary={true}
          label="Add Talent"
          style={{marginTop: 20, marginBottom: 20}}
          containerElement={<Link to="/app/talent-add" />}
          icon={<PersonAdd />}
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
            {/* <CircularProgress /> */}
            {this.state.landing && talent }
            {this.state.search && search }
            {this.state.feed && feed }
          </TableBody>
        </Table>
        <br />
        {/* <Pagination
          total={20}
          current={1}
          display={10}
          onChange={number => this.handlePagination({number})}
        /> */}
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  talentLanding: state.talentLanding.items,
  talentSearch: state.talentSearch.search
});

export default connect(mapStateToProps, { fetchTalentLanding, fetchTalentSearch })(Talent);