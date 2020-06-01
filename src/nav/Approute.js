import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
  

import pres from '../component/pres/pres';
import home from '../component/home/home';
import regis from '../component/regis/regis';
import visual from '../component/visual/visual';
import mod from '../component/mod/mod';
import error from '../component/error/error';



function Approute() {
    return (
        <Router>
          <Switch>
            <Route exact={true} path="/" component={pres} />
            <Route exact={true} path="/home" component={home} />
            <Route exact={true} path="/regis" component={regis} />
            <Route exact={true} path="/visual" component={visual} />
            <Route exact={true} path="/mod" component={mod} />
            <Route exact={true} path="/error" component={error} />
            <Redirect to="/error"/>
          </Switch>
        </Router>
  );

}
 
export default Approute;