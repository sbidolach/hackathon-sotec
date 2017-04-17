var Opc = require('open_payments_cloud_application_api');
Opc.ApiClient.instance.basePath = "https://app-gateway.hackathon.ixaris.com/api";

const express = require('express')
const config = require('./config/config');
const uuid = require('uuid/v1');
const path = require('path');

const bodyParser = require('body-parser')
const cors = require('cors')

const { opc: { programmeKey, programmeId, username, password, managedAccountProfile, managedCardProfile, ownerId} } = config

const server = express()
server.use(bodyParser.json())
server.use(cors())
server.use(express.static('./build'));

// get information about token
const getToken =() => {
  const api = new Opc.AuthApi();
  const request = new Opc.LoginParams(programmeId, username, password)
  return api.authLogin(uuid(), programmeKey, request)
}

// create a request for funds
server.get('/api/projects', async (req, res) => {
  try {

      const projects = [
          {id: 1, name: 'Human Rights Watch', funds: '£14.000', icon: 'functions', lat: 51.522, lng: -0.089},
          {id: 2, name: 'Do Something', funds: '£55.000', icon: 'person', lat: 51.52, lng: -0.08},
          {id: 3, name: 'World Wildlife Fund', funds: '£22.000', icon: 'star', lat: 51.52, lng: -0.082},
          {id: 4, name: 'Caritas', funds: '£5.000', icon: 'star', lat: 51.523, lng: -0.085}
      ];

      //getToken().then((data) => console.log(data));

      return res.send(projects);
  } catch (err) {
      console.error(err)
      return res.send(err)
  }
})

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

// create a request for funds
server.post('/api/project', async (req, res) => {
  try {
      console.log(req.body);
      return res.send()
  } catch (err) {
      console.error(err)
      return res.send(err)
  }
})

server.listen(config.general.port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + config.general.port)
})
