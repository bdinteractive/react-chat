import React from "react";
import { Route, Link } from 'react-router-dom';
import Paper from "material-ui/Paper"
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem} from 'material-ui/List';
import SearchBar from 'material-ui-search-bar'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

export class Talent extends React.Component {
    render() {
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
                        <TableRow>
                            <TableRowColumn>Jeffrey Dean Morgan</TableRowColumn>
                            <TableRowColumn>500</TableRowColumn>
                            <TableRowColumn>12</TableRowColumn>
                            <TableRowColumn>56</TableRowColumn>
                            <TableRowColumn>
                                <IconMenu
                                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                >
                                    <MenuItem primaryText="Edit Talent" />
                                    <MenuItem primaryText="Schedule One-On-One Chat" />
                                    <MenuItem primaryText="View Talent Feed" />
                                    <MenuItem primaryText="Delete Talent" />
                                </IconMenu>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Norman Reedus</TableRowColumn>
                            <TableRowColumn>200</TableRowColumn>
                            <TableRowColumn>5</TableRowColumn>
                            <TableRowColumn>23</TableRowColumn>
                            <TableRowColumn>
                                <IconMenu
                                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                    >
                                        <MenuItem primaryText="Edit Talent" />
                                        <MenuItem primaryText="Schedule One-On-One Chat" />
                                        <MenuItem primaryText="View Talent Feed" />
                                        <MenuItem primaryText="Delete Talent" />
                                    </IconMenu>
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}