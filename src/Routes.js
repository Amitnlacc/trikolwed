import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Mhome from './Mhome/mhome';
import Location from './Location/location';
import Story  from "./Story/story";
import Details from "./Details/details";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Mhome} />
                    <Route path="/Location" component={Location} />
                    <Route path="/story" component={Story} />
                    <Route path="/details" component={Details} />
                </Switch>
            </Router>
        )
    }
}