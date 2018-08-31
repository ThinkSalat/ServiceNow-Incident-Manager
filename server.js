const axios = require('axios');
const path = require('path');
const express =  require('express');
const app = express();

// process.env accesses heroku's environment variables
const PORT = process.env.PORT || 8000; 

app.use(express.static('public'));

const username = 'admin';
const password = 'lFsDb4EZL3cb';

const incidentApi = {
  url: "https://dev65913.service-now.com/api/now/table/incident",
  method: "get",
  headers: {
    "Accept": "application/json"
  },
  auth: {
      username,
      password
  }
};

app.get('/api/incidents', (req, res) => {
  axios(incidentApi)
  .then( response => {
    res.send(response.data);
  }).catch( err => {
    console.log('api error', err.toString());
  });
});

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Request-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});