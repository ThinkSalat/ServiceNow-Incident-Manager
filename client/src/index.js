import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', async () => {
  let incidents = await axios.get('/api/incidents')
  caches.incidents = incidents.data.result
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
})