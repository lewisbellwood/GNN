var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

var MONGOHQ_URL = "mongodb://gnn:Psycle123@ds033601.mongolab.com:33601/gnn"

var collection;
var data = [{
    username: 'misha',
    name: 'Misha Davinpour',
    password: '123456',
    dob: '10/02/1989',
    gender: '1',
    location: 'london',
    about: 'I am the first user of gnn'
}];

console.log(data)
MongoClient.connect(MONGOHQ_URL, function(err, db) {

    collection = db.collection('users');

})

 exports.removeUser = function (){

    collection.remove(function(err, result) {
        if (err) {
            return console.error(err)
        }

    })
}

 exports.addUser = function (data) {

    console.log(data)

    collection.insert(data, function(err,
        docs) {
        if (err) {
            return console.error(err)
        }
        console.log('just inserted ', docs.length, ' new documents!')

    })


}

 exports.searchUser = function () {

    collection.find({}).toArray(function(err, docs) {
        if (err) {
            return console.error(err)
        }
        docs.forEach(function(doc) {
            console.log('found document: ', doc)
        })
    })
}
