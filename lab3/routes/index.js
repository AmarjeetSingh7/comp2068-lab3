'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/Amarjeet', function (req, res) {
    res.render('Amarjeet', { title: 'Express' });
});

router.get('/Dad', function (req, res) {
    res.render('Dad', { title: 'Express' });
});


router.get('/Mom', function (req, res) {
    res.render('Mom', { title: 'Express' });
});



module.exports = router;
