import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from "../components/Header";
import { Login } from "../views/Login";
import { Home } from "../views/Home";
import { Talent } from "../views/Talent";
import { TalentAdd } from "../components/Talent//TalentAdd";
import { TalentAdded } from "../components/Talent//TalentAdded";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="container">
                        <Route exact path="/" component={Login} />
                        <Route path="/app" component={Header} />
                        <Route exact path="/app/dashboard" component={Home} />
                        <Route exact path="/app/talent" component={Talent} />
                        <Route exact path="/app/talent-add" component={TalentAdd} />
                        <Route exact path="/app/talent-added" component={TalentAdded} />
                    </div>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));