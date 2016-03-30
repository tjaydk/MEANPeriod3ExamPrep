var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

// create a schema
var jokeSchema = new Schema({
    joke: {type: String, required: true},
    type: [String],
    reference: {
        author: String,
        link: String
    },
    lastEdited: Date
});


// on every save, add the date
jokeSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.lastEdited = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.lastEdited)
        this.lastEdited = currentDate;

    next();
});

jokeSchema.post('save', function(doc, next){
    console.log("Joke saved via Mongoose");
    next();
});


// the schema is useless so far
// we need to create a model using it
var Joke = mongoose.model('Joke', jokeSchema);

// make this available to our users in our Node applications
module.exports = Joke;