var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());
var mongoose = require('mongoose/');
// var config = require('./config');
db = mongoose.connect('mongodb://localhost/text');
Schema = mongoose.Schema;


//data schema for each candidate
var CandidateSchema = new Schema({
  name: String
});


//create candidate model in mongodb
mongoose.model('Candidate', CandidateSchema);
var Candidate = mongoose.model('Candidate');


//get all candidates
function getCandidates(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //.find() without arguments to return all candidates
  //-1 to denote descending order
  Candidate.find().exec(function (arr,data) {
    res.send(data);
  });
}

// function findOneCandidate(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   Candidate.findOne(_id: _id)

// }


//rest verb handling
server.get('/candidates', getCandidates);



server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});