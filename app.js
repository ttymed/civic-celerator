var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());
var mongoose = require('mongoose/');
var config = require('./config');
db = mongoose.connect('mongodb://localhost/text');
Schema = mongoose.Schema;


//data schema for each candidate
var CandidateSchema = new Schema({
  name: String
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});