import React, { Component } from "react";
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import Pagination from 'material-ui-pagination';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableSortLabel,
} from 'material-ui/Table';

class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
  }
  componentDidMount() {

  }
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
      <div>
        <Dialog
          title="Delete Order"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          This action will delete the order.
        </Dialog>
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
      </div>
    )
  }
}

OrderList.propTypes = {}

export default OrderList;