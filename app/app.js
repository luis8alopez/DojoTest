var express = require('express');
var codeBreaker = require('./code-breaker');
var app = express();

app.get('/setSecret/:secret', function (req, res) {
    number = req.params.secret;
    codeBreaker.setSecret(number);
    res.send({message: 'ok, let the game begin'});
});

app.get('/guess/:number', function (req, res) {
    number = req.params.number;
    res.send({result: codeBreaker.guess(number)});
});

module.exports = app;