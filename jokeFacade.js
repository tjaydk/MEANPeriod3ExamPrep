var connect = require('../db/db');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ //function starting with capital letter is a constructor function

});

function _allJokes(callback){
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function(err, data){ //this {} means no search criteria
        if(err){
            //return error message
            callback(err, null);
        } else {
            //return data
            callback(null,data);
        }
    });
};

function _findJoke(searchObj, callback) {
    var db = connect.get();
    db.collection('jokes').find(searchObj).toArray(function(err, data){
        if(err){
            //return error message
            callback(err, null);
        } else {
            //return data
            callback(null,data);
        }
    });
};

function _editJoke(searchObj, replaceObj, callback){
    var db = connect.get();
    db.collection('jokes').replaceOne(searchObj, replaceObj, callback);
};

function _deleteJoke(searchObj, callback){
    var db = connect.get();
    db.collection('jokes').deleteOne(searchObj, callback);
};

function _randomJoke(callback){
    var db = connect.get();
    db.collection('jokes').find({}).toArray(function(err, data){
        if(err) {
            return null;
        } else {
            var jokesArray = data;
            var randomJoke = jokesArray[Math.floor((Math.random()) * jokesArray.length)]; // Get a random number between 0 and the collection size
            if(randomJoke != null) {
                callback(null, randomJoke);
                //console.log(randomJoke);
            } else {
                callback(new Error("Something went wrong"), null);
            }
        }
    });

};

exports.allJokes = _allJokes; //leave the () or you will call the method
exports.findJoke = _findJoke;
exports.editJoke = _editJoke;
exports.deleteJoke = _deleteJoke;
exports.randomJoke = _randomJoke;