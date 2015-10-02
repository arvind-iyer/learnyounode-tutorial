var http = require('http');
var url = require('url');
var strftime = require('strftime');
var server = http.createServer(function(request, response)
  {
    //var requestdata = url.parse('/api/parsetime?iso=2013-08-10T12:10:15.474Z', true);
    requestdata = url.parse(request.url,true);
    if(requestdata.pathname == '/api/parsetime')
    {
      var date = new Date(requestdata.query.iso);
      //Creating a JSON data structure to store time as specified
      var timeJSON = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      };
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(timeJSON));
      console.log(JSON.stringify(timeJSON));
    }
    else if (requestdata.pathname == '/api/unixtime') {
      var time = Date.parse(requestdata.query.iso).toString();
      console.log(time);
      var timeJSON = {
        "unixtime": parseInt(time)
      }
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(timeJSON));
    }
  }
);
server.listen(process.argv[2]);
