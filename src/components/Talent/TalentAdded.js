import React from "react";
import { Link } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

export class TalentAdded extends React.Component {
    render() {
        return(
            
            <Grid
                container
                justify="center"
                spacing={24}
            >
                <Grid
                    item
                    xs={6}
                >
                    <Card style={{marginTop: 60}}>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                            Talent Added!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                color="primary"
                                variant="raised"
                                size="large"
                                component={Link}
                                to="/app/talent"
                                style={{marginTop: 10, marginBottom: 10, marginRight: 10}}
                            >
                                Return to Talent
                            </Button>
                            <Button
                                color="primary"
                                variant="raised"
                                size="large"
                                component={Link}
                                to="/app/talent-add"
                                style={{marginTop: 10, marginBottom: 10, marginRight: 10}}
                            >
                                Add Talent
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}