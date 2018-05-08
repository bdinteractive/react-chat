import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Paper from "material-ui/Paper";
import Pagination from 'material-ui-pagination';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import KeyboardReturn from 'material-ui/svg-icons/hardware/keyboard-return';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { fetchTalentFeed } from '../../actions/talentActions';

class TalentFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "title": "",
      "id": ""
    }
  }
  getTalentId(location) {
    if(typeof location.query == "undefined") {
      console.log("Not Available");
      this.setState({
        "title": "No Talent Sent or Loaded..."
      })
    } else {
      this.setState({
        "title": location.query.talentId,
        "id": location.query.talentId
      })
      this.props.fetchTalentFeed(location.query.talentId);
    }
  }
  componentDidMount() {
    this.getTalentId(this.props.location);
    // this.props.fetchTalentFeed();
  }
  render() {
    console.log(this.props.talentFeed);
    const feed = this.props.talentFeed.map(item => (
      <TableRow key={item.FeedMediaId}>
        <TableRowColumn>{item.TalentFirstName}</TableRowColumn>
        <TableRowColumn>{item.TalentLastName}</TableRowColumn>
        <TableRowColumn>{item.Title}</TableRowColumn>
        <TableRowColumn>{item.Reference}</TableRowColumn>
        <TableRowColumn>{item.LikeCount}</TableRowColumn>
        <TableRowColumn>{item.TotalComments}</TableRowColumn>
      </TableRow>
    ));
    const talentName = (
      <h4>Talent: {this.props.talentFeed.TalentFirstName} {this.props.talentFeed.TalentLastName} </h4>
    )
    return(
      <div>
        <Paper style={{padding: '20px 60px 60px', margin: 15}}>
          <h1>Talent Feed</h1>
          <FlatButton
            primary={true}
            label="Return to Talent"
            style={{marginTop: 20, marginBottom: 20}}
            containerElement={<Link to="/app/talent" />}
            icon={<KeyboardReturn />}
            labelPosition="after"
          />
          {talentName}
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>First Name</TableHeaderColumn>
                <TableHeaderColumn>Last Name</TableHeaderColumn>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Reference</TableHeaderColumn>
                <TableHeaderColumn>Like Count</TableHeaderColumn>
                <TableHeaderColumn>Total Comments</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {feed}
            </TableBody>
          </Table>
          <br />
          {/* <Pagination
            total={20}
            current={1}
            display={2}
            onChange={number => this.handlePagination({number})}
          /> */}
        </Paper>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  talentFeed: state.talentFeed.feed
});

export default connect(mapStateToProps, { fetchTalentFeed })(TalentFeed);