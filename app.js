'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

const cp = require('./data/cp.json')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/postales/:postalcode', (req, res) => {
  const postalCode = req.params.postalcode;
  const data = {
    Estado: '',
    Municipio: '',
    Colonias: []
    
  };
  

  if(!cp) {
    return res.send({
      data,
      err: `missing database`
    });
  }

  if(!postalCode) {
    return res.send({
      data,
      err: `missing postal code ${postalCode}`
    });
  }

  const resultPostal = cp.filter( postal => postal.cp === postalCode);

  if(!resultPostal[0]) {
    return res.send({
      data,
      err: `not result for ${postalCode}`
    });
  }

  data.Estado = resultPostal[0].estado;

  data.Municipio = resultPostal[0].asentamiento;

  data.Colonias = resultPostal.map(results => ({
    name: results.asentamiento,
    type: results.type,
  }))

  res.send({
    data,
    err: `no error detected`
  });
});

module.exports.generic = serverless(app);