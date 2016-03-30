var expect = require('chai').expect;
var model = require('../model/jokeFacade');
var connection = require('../db/db');

var dbURL = "mongodb://localhost:27017/test";
var testjokes = [{
    "joke" : "aaa",
    "type" : ["short", "alcohol", "quote"],
    "reference": { "author" : "Someone", "link" : ""},
    "lastEdited" : new Date()
    },
    {
        "joke" : "bbb",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    }];

describe("test the jokes facade", function(){
    before(function(done){
        connection.connect(dbURL, function(){
            done();
        });
    });

    beforeEach(function(done){
        var db = connection.get();
        db.collection('jokes').deleteMany({}, function(err, data){
            if(err) {
                throw new Error(err);
            }
        });
        db.collection('jokes').insertMany(testjokes, function(err, data){
            if(err) {
                throw new Error(err);
            } else {
                console.log("inserted into database: " + data);
                done();
            }
        });
    });

    it('should have two jokes', function(done){
        model.allJokes(function(err, data){
            expect(data.length).to.be.equal(2);
            done();
        });
    });

    it('should be able to find joke aaa', function(done){
        model.findJoke({joke: "aaa"}, function(err, data){
            expect(data[0].joke).to.be.equal('aaa');
            done();
        })
    });

    it('should change aaa to ccc', function(done){
        model.editJoke({joke: "aaa"}, {joke: "ccc"}, function(err, data){
            expect(data.modifiedCount).to.be.equal(1);
            done();
        });
    });

    it('should delete bbb', function(done){
        model.deleteJoke({joke: "bbb"}, function(err, data){
            expect(data.deletedCount).to.be.equal(1);
            done();
        });
    });

    it('should find a random joke', function(done){
            model.randomJoke(function(err, data){
                expect(data).to.be.an('object');
                done();
            });
        });


});