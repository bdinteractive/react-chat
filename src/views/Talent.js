import React from "react";
import { Route, Link } from 'react-router-dom';
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import Table, { TableHead, TableBody, TableRow, TableCell } from "material-ui/Table"
import { List, ListItem, ListItemIcon, ListItemText } from 'material-ui';

export class Talent extends React.Component {
    render() {
        return(
            <Grid container>
                <Grid
                    item
                    md
                >
                    <Paper style={{padding: 60}}>
                        <Typography variant="headline" component="h4">
                            Talent
                        </Typography>
                        <Button
                            color="primary"
                            variant="raised"
                            size="small"
                            component={Link}
                            to="/app/talent-add"
                            style={{marginTop: 40, marginBottom: 20}}
                        >
                            Add Talent
                        </Button>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Talent</TableCell>
                                    <TableCell>Subscribers</TableCell>
                                    <TableCell>Pending Orders</TableCell>
                                    <TableCell>Fullfield Orders</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Jeffrey Dean Morgan</TableCell>
                                    <TableCell>500</TableCell>
                                    <TableCell>12</TableCell>
                                    <TableCell>56</TableCell>
                                    <TableCell>
                                        <List
                                            component="nav"
                                            style={{width: 300}}
                                        >
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="Edit Talent"/>
                                            </ListItem>
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="Schedule One-On-One Chat With Session"/>
                                            </ListItem>
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="View Talent Feed"/>
                                            </ListItem>
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="Delete Talent"/>
                                            </ListItem>
                                        </List>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Norman Reedus</TableCell>
                                    <TableCell>200</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>23</TableCell>
                                    <TableCell>
                                        <List
                                            component="nav"
                                            style={{width: 300}}
                                        >
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="Edit Talent"/>
                                            </ListItem>
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="Schedule One-On-One Chat With Session"/>
                                            </ListItem>
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="View Talent Feed"/>
                                            </ListItem>
                                            <ListItem
                                                button
                                                dense
                                            >
                                                <ListItemText primary="Delete Talent"/>
                                            </ListItem>
                                        </List>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}