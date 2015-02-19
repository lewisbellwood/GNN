var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

var MONGOHQ_URL = "mongodb://gnn:Psycle123@ds033601.mongolab.com:33601/gnn"

var users;
var article;
var data = [{
    username: 'misha',
    name: 'Misha Davinpour',
    password: '123456',
    dob: '10/02/1989',
    gender: '1',
    location: 'london',
    about: 'I am the first user of gnn'
}];



MongoClient.connect(MONGOHQ_URL, function(err, db) {

    users = db.collection('users');
    articles = db.collection('articles');


})


exports.removeUser = function() {

    collection.remove(function(err, result) {
        if (err) {
            return console.error(err)
        }

    })
}

exports.addUser = function(data) {
    users.insert(data, function(err,
        docs) {
        if (err) {
            return console.error(err)
        }
        console.log('just inserted ', docs.length, ' new documents!')
    })

}

exports.addArticle = function(data) {
    articles.insert(data, function(err,
        docs) {
        if (err) {
            return console.error(err)
        }
        console.log('just inserted ', docs.length, ' new documents!')

    })
}

exports.latestArticle = function(renderer) {


    articles.find().toArray(function(err, articles) {

        renderer(articles)
    });


}

exports.searchUser = function() {

    collection.find({}).toArray(function(err, docs) {
        if (err) {
            return console.error(err)
        }
        docs.forEach(function(doc) {
            console.log('found document: ', doc)
        })
    })
}
