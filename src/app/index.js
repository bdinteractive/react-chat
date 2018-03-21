import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';


// import { MuiThemeProvider } from 'material-ui/styles/MuiThemeProvider';
// import Reboot from 'material-ui/Reboot';

import { Login } from "../views/Login";
import { Header } from "../components/Header";
import { Home } from "../views/Home";
import { Talent } from "../views/Talent";
// import { TalentAdd } from "../components/Talent/TalentAdd";
// import { TalentAdded } from "../components/Talent/TalentAdded";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#3f51b5",
    }
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router>
                    <div>
                        {/* <Reboot/> */}
                        <Route exact path="/" component={Login} />
                        <Route path="/app" component={Header} />
                        <Route exact path="/app/dashboard" component={Home} />
                        <Route exact path="/app/talent" component={Talent} />
                        {/* <Route exact path="/app/talent-add" component={TalentAdd} /> */}
                        {/* <Route exact path="/app/talent-added" component={TalentAdded} /> */}
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

render(<App/>, window.document.getElementById("app"));