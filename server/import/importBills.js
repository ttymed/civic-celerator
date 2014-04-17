// Current session
// http://api.legiscan.com/?key=61d61680b457f843fa7bcb3033be59b9&op=getMasterList&state=HI
//
// in 2014 (same as above)
// http://api.legiscan.com/?key=61d61680b457f843fa7bcb3033be59b9&op=getMasterList&state=HI
//
// in 2013
// http://api.legiscan.com/?key=61d61680b457f843fa7bcb3033be59b9&op=getMasterList&id=997
//
// in 2012
// http://api.legiscan.com/?key=61d61680b457f843fa7bcb3033be59b9&op=getMasterList&id=927
//
// in 2011
// http://api.legiscan.com/?key=61d61680b457f843fa7bcb3033be59b9&op=getMasterList&id=124
//
// in 2010
// http://api.legiscan.com/?key=61d61680b457f843fa7bcb3033be59b9&op=getMasterList&id=63



var http = require('http');
var fs = require('fs');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/civ_test');
// mongoose.connect('mongodb://kingtak:kingtak@ds041367.mongolab.com:41367/civ_accelerator');
var db = mongoose.connection;
// var bills1 = require('./bills1');
// var bills2011 = require('./bills2011');
// var bills2012 = require('./bills2012');
var bills2013 = require('./bills2013');
var bills2014 = require('./bills2014');

for (var i = 0; i < 3687; i++) {
  var singleDoc = bills2013.bills2013.masterlist[i];
  db.collection('bills').save(singleDoc, function(err) {
    if(err) throw err;
    console.log('working');
  });
}

for (var j = 0; j < 5589; j++) {
  var singleDoc = bills2014.bills2014.masterlist[j];
  db.collection('bills').save(singleDoc, function(err) {
    if(err) throw err;
    console.log('also working');
  });
}