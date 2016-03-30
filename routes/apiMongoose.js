var express = require('express');
var router = express.Router();
var Joke = require('../model/jokeMongoose.js');

/*
 * CRUD OPERATIONS
 * ===============
 * */

//CREATE JOKE
router.post('/joke', function(req, res, next){
    var jokeObj = new Joke(
        {
            joke: req.body.joke,
            type: req.body.type,
            reference: req.body.reference
        }
    );
    jokeObj.save(function(err){

    });
});

//GET ALL JOKES
router.get('/jokes', function(req, res, next) {
    Joke.find(function(err, data){
        if(err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

//GET ONE JOKE WITH SEARCHWORD ON JOKE
router.get('/joke/:joke', function(req, res, next) {
    var obj = {joke: req.params.joke};
    Joke.findOne(obj, function(err, data){
        if(err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

//UPDATE SPECIFIC JOKE
router.put('/joke/:joke', function(req, res, next){
    var searchObj = {joke: req.params.joke};
    var jokeObj =
        {
            joke: req.body.joke,
            type: req.body.type,
            reference: req.body.reference
        };

    Joke.findOneAndUpdate(searchObj, jokeObj, function(err, doc){
        if(err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });

});

//REMOVE SPECIFIC JOKE
router.delete('/joke/:joke', function(req, res, next){
    var searchObj = {joke: req.params.joke};

    Joke.findOneAndRemove(searchObj, function(err, doc){
        if(err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
});

module.exports = router;