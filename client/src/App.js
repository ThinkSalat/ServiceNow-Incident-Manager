import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';

import Incident from './components/incident';
import IncidentManager from './components/incident_manager';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter>
            <Switch>
              {/* <Route path='/incidents/:number' component={IncidentManager}/> */}
              <Route path='/' component={IncidentManager} />
            </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
