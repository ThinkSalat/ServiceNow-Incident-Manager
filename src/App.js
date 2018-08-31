import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let incidentes = axios.get('/api/incidents').then( res => {
      console.log(res);
    }).catch( res => {
      console.log(res);
    });
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
