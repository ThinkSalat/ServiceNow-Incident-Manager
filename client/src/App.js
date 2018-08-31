import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';

import IncidentContainer from './components/incident_container';
import IncidentManagerContainer from './components/incident_manager_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={this.props.store}>
          <HashRouter>
            <Switch>
              <Route path='/incidents/:id' component={IncidentContainer}/>
              <Route path='/' component={IncidentManagerContainer} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
