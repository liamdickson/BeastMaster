var express = require('express');
var React = require('react');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'BeastMaster' });
});

module.exports = router;