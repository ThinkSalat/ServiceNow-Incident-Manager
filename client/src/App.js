import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';

import Incident from './components/incident';
import IncidentManager from './components/incident_manager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={this.props.store}>
          <HashRouter>
            <Switch>
              <Route path='/incidents/:id' component={Incident}/>
              <Route path='/' component={IncidentManager} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
