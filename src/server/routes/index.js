var express = require('express');
var router = express.Router();
var data = require("../data")

router.get('/employees', function(req, res) {
    res.render('index.ejs');
});

router.get('/data', function(req, res) {
    res.send(data);
});

router.get('*', function(req, res) {
    res.redirect('/employees');
});

module.exports = router;
