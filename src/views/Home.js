import React from "react";
import { Redirect } from "react-router-dom";
import superagent from "superagent";
import Paper from "material-ui/Paper"

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
            <div>
                {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : (
                    <Paper style={{padding: '20px 60px 60px', margin: 15}}>
                        <h4>
                            Welcome {this.state.username}
                        </h4>
                        <h2>
                            This is Your Dashboard.
                        </h2>
                    </Paper>
                )}
            </div>
        );
    }
}