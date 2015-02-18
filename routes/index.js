var express = require('express');
var router = express.Router();


// Pull in Data base Credentials
var db = require('./db')


// Get Web pages 

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

/* GET Sign Up page. */
router.get('/signup', function(req, res, next) {
    res.render('signup', {
        title: 'signup'
    });
});

/* GET Create Article page. */
router.get('/create_article', function(req, res, next) {
    res.render('create_article', {
        title: 'create_article'
    });
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
    res.render('login', {
        title: 'login'
    });
});

router.get('/latest_article', function(req, res, next) {
    res.render('latest_article', {
        title: 'latest_article'
    });
});



// Posts to data base

// send login form
router.post('/postSignup', function(req, res) {
    var userName = req.body.userName;
    var html = 'Hello: ' + userName + '.<br>' + '<a href="/">Try again.</a>';
    var data = req.body;
    db.addUser(data)
    res.send(html);
});

router.post('/postArticle', function(req, res) {
    var userName = req.body.userName;
    var html = 'Hello: ' + userName + '.<br>' + '<a href="/">Try again.</a>';
    var data = req.body;
    db.addArticle(data)
    res.send(html);
});


router.get('/latestArticle', function(req, res) {   
    var render = function(renderdata){
        res.send(renderdata);
    } 
    db.latestArticle(render);    
});




module.exports = router;
