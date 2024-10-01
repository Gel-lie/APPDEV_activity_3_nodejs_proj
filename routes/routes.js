const express = require('express');
const nodejs = require('../controller/NodeJsController');
const routes =express.Router();

routes.get('/', nodejs.index);
routes.post('/save', nodejs.save);
routes.get('/information', nodejs.information);
routes.get('/delete/:id', nodejs.delete);
routes.get('/edit/:id', nodejs.edit);
routes.post('/edit/:id', nodejs.update);

module.exports =routes;