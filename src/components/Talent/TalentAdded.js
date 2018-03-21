import React from "react";
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from "material-ui/Paper";

export class TalentAdded extends React.Component {
    render() {
        return(            
            <Paper style={{padding: '20px 60px 60px', margin: 15}}>
                <Card style={{marginTop: 60}}>
                    <CardText style={{textAlign: 'center'}}>
                        <h2>
                            Talent Added!
                        </h2>
                    </CardText>
                    <CardActions style={{textAlign: 'center', paddingBottom: 20}}>
                        <RaisedButton
                            containerElement={<Link to="/app/talent" />}
                            label="Return to Talent"
                            primary={true}
                            style={{marginTop: 10, marginBottom: 10, marginRight: 10}}
                        />
                        <RaisedButton
                            containerElement={<Link to="/app/talent-add" />}
                            label="Add More Talent"
                            primary={true}
                            style={{marginTop: 10, marginBottom: 10, marginRight: 10}}
                        />
                    </CardActions>
                </Card>
            </Paper>
        );
    }
}