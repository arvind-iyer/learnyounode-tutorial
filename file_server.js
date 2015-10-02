var http   = require('http');
var fs = require('fs');

var port = process.argv[2]
var filepath = process.argv[3];

var filestream = fs.createReadStream(filepath);

var server = http.createServer( function callback(request, response)
  {
    filestream.pipe(response);
  }
);
server.listen(port);
