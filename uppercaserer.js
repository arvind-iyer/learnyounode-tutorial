var t2map = require('through2-map');
var http = require('http');

var port = process.argv[2];

var server = http.createServer(function(req,res)
  {
    //Convert request data to upper case and send it to the response
    if(req.method == 'POST')
      req.pipe(t2map(function(chunk)
        {
          return chunk.toString().toUpperCase();
        }
      )).pipe(res);
  }
);

server.listen(port)
