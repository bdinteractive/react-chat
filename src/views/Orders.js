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

export class Orders extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Confirm Delete"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return(
      <Paper style={{padding: '20px 60px 60px', margin: 15}}>
        <Dialog
          title="Delete Order"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          This action will delete the order.
        </Dialog>
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
        <h4>All Orders</h4>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Order Number</TableHeaderColumn>
              <TableHeaderColumn>
                Date
              </TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Fan</TableHeaderColumn>
              <TableHeaderColumn>Talent</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>00041</TableRowColumn>
              <TableRowColumn>08/23/2017</TableRowColumn>
              <TableRowColumn>Pending</TableRowColumn>
              <TableRowColumn>Username01</TableRowColumn>
              <TableRowColumn>Jeffrey Dean Morgan</TableRowColumn>
              <TableRowColumn>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem onClick={this.handleOpen} primaryText="Edit Order" />
                    <MenuItem onClick={this.handleOpen} primaryText="Delete Order" />
                  </IconMenu>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>00030</TableRowColumn>
              <TableRowColumn>08/22/2017</TableRowColumn>
              <TableRowColumn>Fulfilled</TableRowColumn>
              <TableRowColumn>Username02</TableRowColumn>
              <TableRowColumn>Andrew Lincoln</TableRowColumn>
              <TableRowColumn>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem onClick={this.handleOpen} primaryText="Edit Order" />
                    <MenuItem onClick={this.handleOpen} primaryText="Delete Order" />
                  </IconMenu>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <br />
        <Pagination
          total={20}
          current={1}
          display={7}
        />
        <br />
        <Divider />
        <br />
        <h4>Orders Past 45 Days (Not Fulfilled)</h4>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Order Number</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Fan</TableHeaderColumn>
              <TableHeaderColumn>Talent</TableHeaderColumn>
              <TableHeaderColumn>Products</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>000013</TableRowColumn>
              <TableRowColumn>08/15/2017</TableRowColumn>
              <TableRowColumn>Username05</TableRowColumn>
              <TableRowColumn>Norman Reedus</TableRowColumn>
              <TableRowColumn>Autograph Photo (Pending)</TableRowColumn>
              <TableRowColumn>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem onClick={this.handleOpen} primaryText="Edit Order" />
                    <MenuItem onClick={this.handleOpen} primaryText="Delete Order" />
                  </IconMenu>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>000025</TableRowColumn>
              <TableRowColumn>08/15/2017</TableRowColumn>
              <TableRowColumn>Username05</TableRowColumn>
              <TableRowColumn>Andrew Lincoln</TableRowColumn>
              <TableRowColumn>Autograph Photo (Pending)</TableRowColumn>
              <TableRowColumn>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Edit Order" />
                    <MenuItem primaryText="Delete Order" />
                  </IconMenu>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <br />
        <Pagination
          total={20}
          current={1}
          display={7}
        />
        <br />
        <Divider />
        <br />
        <h4>Orders Past 60 Days (Not Fulfilled)</h4>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Order Number</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Fan</TableHeaderColumn>
              <TableHeaderColumn>Talent</TableHeaderColumn>
              <TableHeaderColumn>Products</TableHeaderColumn>
              <TableHeaderColumn>Action (Cancel All Orders)</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>00001</TableRowColumn>
              <TableRowColumn>08/15/2017</TableRowColumn>
              <TableRowColumn>Username03</TableRowColumn>
              <TableRowColumn>Josh McDermitt</TableRowColumn>
              <TableRowColumn>Autograph Photo (Pending)</TableRowColumn>
              <TableRowColumn>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Edit Order" />
                    <MenuItem primaryText="Delete Order" />
                  </IconMenu>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>00005</TableRowColumn>
              <TableRowColumn>08/15/2017</TableRowColumn>
              <TableRowColumn>Username04</TableRowColumn>
              <TableRowColumn>Andrew Lincoln</TableRowColumn>
              <TableRowColumn>Autograph Photo (Pending)</TableRowColumn>
              <TableRowColumn>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Edit Order" />
                    <MenuItem primaryText="Delete Order" />
                  </IconMenu>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <br />
        <Pagination
          total={20}
          current={1}
          display={7}
        />
        
      </Paper>
    );
  }
}