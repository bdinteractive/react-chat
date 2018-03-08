import React from "react";
import { Link, Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';



export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null
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
    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        const { anchorEl } = this.state;
        return(
            <div>
                {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : (
                    <div>
                        <AppBar position="static">
                            <Toolbar>
                                <Button
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
                                </Menu>
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
                                <Button color="inherit" onClick={this.handleLogout.bind(this)}>Log out</Button>
                            </Toolbar>
                        </AppBar>
                    </div>
                )}
            </div>
        );
    }
}