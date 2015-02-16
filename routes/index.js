


var express = require('express');
var router = express.Router();

require( './../db' );

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});


router.post('/login', function(req, res) {
    var userName = req.body.userName;
    var html = 'Hello: ' + userName + '.<br>' + '<a href="/">Try again.</a>';
    



    var data = [req.body];


    addUser(data)

    res.send(html);
});


module.exports = router;
