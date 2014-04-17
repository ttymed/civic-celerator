var http = require('http');
var fs = require('fs');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/civ_test');
var offset = 0,
    staticPath = '/resource/jexd-xbcg.json?$limit=1&$offset=';


var options = {
  host: 'data.hawaii.gov',
  port: 80,
  path: staticPath + offset,
  method: 'GET'
};

function getData() {
  http.get(options, function(resp){
  resp.
    on('data', function(chunk){
      /*
      * Data is streaming to us in chunks. We are subscribed to this stream
      * We are saving the data to the 'data' variable declared outside of this
      * function's scope.
      */
      // console.log(chunk.toString());

      // fs.appendFile('data.txt', chunk.toString(), function(err) {
      //   if(err) throw err;
      //   console.log('The "data to appended was successfully appended to file!!!"');
      // });

      var formattedData = chunk.toJSON();
     console.log(formattedData);
    }).
    on('end', function () {
      /*
      * Output the contents of the stream, once it is done, asyncronously
      */
    });
  }).
  on("error", function(e){
    console.log("Got error: " + e.message);
  });
}

for (var i = 0; offset<5000; i++) {
  
  getData();
  offset += 1000;
  options.path = staticPath + offset;
  console.log(options.path);
}