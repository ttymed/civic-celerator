var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());
var mongoose = require('mongoose/');
// var config = require('./config');
db = mongoose.connect('mongodb://localhost/text');
Schema = mongoose.Schema;

var candidate = {
  first_name        : "firstName",
  last_name         : "lastName",
  photo_url         : "http://capitol.bullshit.com",
  party             : "Democratic/Republican/etc",
  service_begin     : 2006,
  service_end       : 2014,
  committiees       : [ "Finance", "Labor & Public Employment", "Legislative Management" ],
  sponsored_bills   : [ "MK474", "H3456K", "43474", "21456K" ]
};

var contributions = {
  contributor_name  : "name/company name",
  candidate_name    : "Neil Abercrombie",
  amount            : 5000000,
  date_contributed  : "04/12/13",
  employer          : "Sun Pacific Group LLC",
  inudstry          : "labor"
};
//data schema for each candidate
var CandidateSchema = new Schema({
  name: String
});


//create candidate model in mongodb
mongoose.model('Candidate', CandidateSchema);
var Candidate = mongoose.model('Candidate');


//get all candidates
// function getCandidates(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   //.find() without arguments to return all candidates
//   //-1 to denote descending order
//   Candidate.find().exec(function (arr,data) {
//     res.send(data);
//   });
// }

function getCandidates(req, res, next) {
  return res.json(candidate);
}

function getContributions(req, res, next) {
  return res.json(contributions);
} 
// function findOneCandidate(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   Candidate.findOne(_id: _id)

// }


//rest verb handling
server.get('/candidates', getCandidates);
server.get('/contributions', getContributions);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});