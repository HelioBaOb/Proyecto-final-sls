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
      err: `missing postal codes`
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
    Nombre: results.asentamiento,
    Tipo: results.type,
  }))

  res.send({
    Estado: `${data.Estado}`,
    Municipio: `${data.Municipio}`,
    Colonias:  data.Colonias.map(results => ({
      Nombre: `${results.Nombre}`,
      Tipo: `${results.Tipo}`,
    })),
    err: `no error detected`
  });
});

module.exports.handler = serverless(app);