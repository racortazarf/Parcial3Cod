import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';
  

  import home from '../component/home/home';


function Approute() {
    return (
        <Router>
          <Switch>
            <Route exact={true} path="/" component={home} />
          </Switch>
        </Router>
  );

}
 
export default Approute;