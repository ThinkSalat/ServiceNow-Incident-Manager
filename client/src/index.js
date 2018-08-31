import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', async () => {
  // Update cache
  let incidents = await axios.get('/api/incidents')
  caches.incidents = incidents.data.result
  // let date = new Date();
  // let timestamp = date.getTime()
  // caches.lastRetrieval = timestamp;

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
})