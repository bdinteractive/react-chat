import React from "react";
import { Link, Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Lock } from 'material-ui-icons';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
            left: false
        }
    }
    handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        this.forceUpdate();
    }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    }
    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        const { anchorEl } = this.state;
        return(
            <div>
                {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : (
                    <div>
                        <AppBar
                            // position="absolute"
                            position="static"
                        >
                            <Toolbar>
                                <Button
                                    onClick={this.toggleDrawer('left', true)}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </Button>
                                {/* <Button
                                    aria-owns={anchorEl ? 'simple-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem component={Link} to="/app/orders">Orders</MenuItem>
                                    <MenuItem component={Link} to="/app/payouts">Payouts</MenuItem>
                                    <MenuItem component={Link} to="/app/reported-content">Reported Content</MenuItem>
                                    <MenuItem component={Link} to="/app/fans">Fans (Users)</MenuItem>
                                    <MenuItem onClick={this.handleClose} component={Link} to="/app/talent">Talent</MenuItem>
                                    <MenuItem component={Link} to="/app/one-on-one">One-On-One ChatWith</MenuItem>
                                    <MenuItem component={Link} to="/app/promo Code">Promo Code</MenuItem>
                                    <MenuItem component={Link} to="/app/ads">Ads</MenuItem>
                                    <MenuItem component={Link} to="/app/featured-content">Featured Content</MenuItem>
                                </Menu> */}
                                <Typography
                                    variant="title"
                                    color="inherit"
                                    style={{flex: 1}}
                                >
                                    ChatWith Management Console
                                </Typography>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/app/dashboard"
                                >
                                    Dashboard
                                </Button>
                                <Button
                                    color="inherit"
                                    onClick={this.handleLogout.bind(this)}
                                >
                                    Log out
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <Drawer
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
                        </Drawer>
                    </div>
                )}
            </div>
        );
    }
}