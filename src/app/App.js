import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import store from './store';

import { Login } from "../views/Login";
import { Header } from "../components/Header";
import { Home } from "../views/Home";
import { Talent } from "../views/Talent";
import { AddTalent } from "../components/Talent/AddTalent";
import { TalentAdded } from "../components/Talent/TalentAdded";
import { Orders } from "../views/Orders";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#3f51b5",
    }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/app" component={Header} />
              <Route exact path="/app/dashboard" component={Home} />
              <Route exact path="/app/talent" component={Talent} />
              <Route exact path="/app/talent-add" component={AddTalent} />
              <Route exact path="/app/talent-added" component={TalentAdded} />
              <Route exact path="/app/orders" component={Orders} />
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;