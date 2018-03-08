import React from "react";
import { Redirect } from "react-router-dom";
import superagent from "superagent";
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import Grid from "material-ui/Grid"

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Brad"
        }
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        return(
            <Grid container>
                {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : (
                    <Grid
                        item
                        md
                    >
                        <Paper style={{padding: 60}}>
                            <Typography variant="headline" component="h4">
                                Welcome {this.state.username}
                            </Typography>
                            <Typography component="h2">
                                This is Your Dashboard.
                            </Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        );
    }
}