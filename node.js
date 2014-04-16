var http = require('http');
var fs = require('fs');

var offset = 0,
    staticPath = '/resource/jexd-xbcg.json?$limit=10&$offset=';


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

      fs.appendFile('data.txt', chunk.toString(), function(err) {
        if(err) throw err;
        console.log('The "data to appended was successfully appended to file!!!"');
      });
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

for (var i = 0; offset<50; i++) {
  
  getData();
  offset += 10;
  options.path = staticPath + offset;
  console.log(options.path);
}