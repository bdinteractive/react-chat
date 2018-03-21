import React from "react";
import { Route, Link } from 'react-router-dom';
import Paper from "material-ui/Paper"
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
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
            <Paper style={{padding: 60, margin: 15}}>
                <h1>Talent</h1>

                <RaisedButton
                    primary={true}
                    label="Add Talent"
                    style={{marginTop: 20, marginBottom: 20}}
                    containerElement={<Link to="/app/talentAdd" />}
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
                                <List>
                                    <ListItem primaryText="Edit Talent" />
                                    <ListItem primaryText="Schedule One-On-One Chat With Session" />
                                    <ListItem primaryText="View Talent Feed" />
                                    <ListItem primaryText="Delete Talent" />
                                </List>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Norman Reedus</TableRowColumn>
                            <TableRowColumn>200</TableRowColumn>
                            <TableRowColumn>5</TableRowColumn>
                            <TableRowColumn>23</TableRowColumn>
                            <TableRowColumn>
                                <List>
                                    <ListItem primaryText="Edit Talent" />
                                    <ListItem primaryText="Schedule One-On-One Chat With Session" />
                                    <ListItem primaryText="View Talent Feed" />
                                    <ListItem primaryText="Delete Talent" />
                                </List>
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}