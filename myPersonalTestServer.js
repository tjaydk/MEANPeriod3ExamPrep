var jokesDb = require('./model/jokeFacade.js');
var connection = require('./db/db');

var dbURL = "mongodb://localhost:27017/test";

connection.connect(dbURL, function(){
    jokesDb.allJokes(function(err, data){
        if(err) {
            console.log("UPS");
        } else {
            console.log(data);
        }
    });
});
