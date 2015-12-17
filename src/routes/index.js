var express = require('express');
var router = express.Router();
// var User = require('./../db/model/User');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Hello world' });
});

module.exports = router;
