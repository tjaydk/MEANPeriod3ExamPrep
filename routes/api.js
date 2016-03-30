var express = require('express');
var router = express.Router();
var facade = require('../model/jokeFacade.js');

/*
* CRUD OPERATIONS
* ===============
* */

//CREATE JOKE
router.post('/joke', function(req, res, next){
    facade.addJoke(req.body, function(err, data){
        if(err) {
            res.send(err);
        } else {
            res.send("Joke stored");
        }
    })
});

//GET ALL JOKES
router.get('/jokes', function(req, res, next) {
    facade.allJokes(function(err, data){
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
    console.log(obj.joke);
    facade.findJoke(obj, function(err, data){
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

    facade.findJoke(searchObj, function(err, data){
        if(err) {
            res.send(err);
        } else {
            facade.editJoke(data[0], req.body, function(err){
                if(err) {
                    res.send(err);
                } else {
                    res.send("Joke updated");
                }
            });
        }
    });
});

router.delete('/joke/:joke', function(req, res, next){
    var searchObj = {joke: req.params.joke};

    facade.deleteJoke(searchObj, function(err){
        if(err) {
            res.send(err);
        } else {
            res.send("Joke deleted");
        }
    });
});

module.exports = router;