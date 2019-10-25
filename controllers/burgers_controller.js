var express = require('express');

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require('../models/burgers.js');

router.get('/', function(req, res) {
  burger.all(function(data) {
    res.render('index', {burgers: data});
  });
});

router.get('/api/burgers', function(req, res) {
  burger.all(function(data) {
    res.json(data);
  });
});

router.post('/api/burgers', function(req, res) {
  burger.insert(req.body, function(data) {
    res.json(data);
  });
});

router.put('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  burger.update(req.params.id, req.body.isEaten,function(data) {
    res.json(data);
  });
});

router.delete('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  burger.deleteOne(req.params.id, function(data) {
    res.json(data);
  });
});

module.exports = router;
