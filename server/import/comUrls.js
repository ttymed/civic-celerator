var http = require('http');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/civ_test');
mongoose.connect('mongodb://kingtak:kingtak@ds041367.mongolab.com:41367/civ_accelerator');
var db = mongoose.connection;

var comUrls = [ 'http://openstates.org/api/v1/committees/HIC000001/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000004/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000005/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000007/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000009/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000010/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000011/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000012/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000014/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000015/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000016/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000018/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000019/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000037/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000038/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000039/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000040/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000041/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000002/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000023/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000025/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000027/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000028/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000029/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000030/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000031/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000032/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000035/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000045/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000046/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000047/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000049/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000050/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000071/?apikey=7720e008f10a45c7a114b988d78bba61',
  'http://openstates.org/api/v1/committees/HIC000075/?apikey=7720e008f10a45c7a114b988d78bba61' ];


for (var i = 0; i < comUrls.length; i++) {
  getData(i);
}

function getData(i) {
  var data = '';

  http.get(comUrls[i], function(resp) {
    resp.
      on('data', function (chunk) {
        data += chunk;
      });
    resp.
      on('end', function(chunk) {
        var niceData = JSON.parse(data);
        console.log(niceData);
        db.collection('committees').save(niceData, function(err) {
          if (err) throw err;
          console.log('saving into the db');
        });
      });
  });
};