import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import ExcerciseFirst from '../page/excerciseFirst';
  import ExcerciseSecond from '../page/excerciseSecond';

const Naigator = () => (
    <Router>
        <Switch>
            <Route path="/excercise1">
                <ExcerciseFirst />
            </Route>
            <Route path="/excercise2">
                <ExcerciseSecond />
            </Route>
        </Switch>
    </Router>
)

export default Naigator