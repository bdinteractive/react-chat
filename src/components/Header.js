import React from "react";
import { Link, Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import Menu, { MenuItem } from 'material-ui/Menu';
// import Drawer from 'material-ui/Drawer';
// import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


import { Lock } from 'material-ui-icons';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        this.forceUpdate();
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        const { anchorEl } = this.state;
        return(
            <div>
                {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : (
                    <div>
                        <AppBar
                            style={{position: 'fixed', top: '0'}}
                            title="ChatWith Management Console"
                            onLeftIconButtonClick={this.handleToggle}
                        >
                            <Toolbar style={{backgroundColor: 'transparent'}}>
                                <ToolbarGroup>
                                    <FlatButton
                                        label="Dashboard"
                                        style={{margin: '5px 5px 0 0'}}
                                        labelStyle={{color: 'white'}}
                                        containerElement={<Link to="/app/dashboard" />}
                                    />
                                    <FlatButton
                                        label="Logout"
                                        style={{margin: '5px 0 0 5px'}}
                                        labelStyle={{color: 'white'}}
                                        onClick={this.handleLogout.bind(this)}
                                    />
                                </ToolbarGroup>
                            </Toolbar>
                        </AppBar>

                        <Drawer
                            docked={false}
                            width={240}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({open})}
                        >
                            <MenuItem
                                onClick={this.handleClose}
                                containerElement={<Link to="/app/orders" />}
                            >
                                Orders
                            </MenuItem>
                            <MenuItem onClick={this.handleClose}>Payouts</MenuItem>
                            <MenuItem onClick={this.handleClose}>Reported Content</MenuItem>
                            <MenuItem onClick={this.handleClose}>Fan (Users)</MenuItem>
                            <MenuItem
                                onClick={this.handleClose}
                                containerElement={<Link to="/app/talent" />}
                            >
                                Talent
                            </MenuItem>
                            <MenuItem onClick={this.handleClose}>One-On-One ChatWith</MenuItem>
                            <MenuItem onClick={this.handleClose}>Promo Code</MenuItem>
                            <MenuItem onClick={this.handleClose}>Ads</MenuItem>
                            <MenuItem onClick={this.handleClose}>Feature Content</MenuItem>
                        </Drawer>



                        {/* <Drawer
                            open={this.state.left}
                            // variant="permanent"
                            onClose={this.toggleDrawer('left', false)}
                        >
                            <List
                                component="nav"
                                style={{width: 240}}
                            >
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/orders"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Orders"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/payouts"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Payouts"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/reported-content"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Reported Content"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/fans"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Fans (Users)"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/talent"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Talent"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/one-on-one"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="One-On-One ChatWith"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/promo-code"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Promo Code"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/ads"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Ads"/>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={this.handleClose}
                                    component={Link}
                                    to="/app/feature-content"
                                    onClick={this.toggleDrawer('left', false)}
                                >
                                    <ListItemText primary="Feature Content"/>
                                </ListItem>
                            </List>
                        </Drawer> */}
                    </div>
                )}
            </div>
        );
    }
}