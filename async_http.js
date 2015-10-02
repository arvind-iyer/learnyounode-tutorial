var http = require('http');
var bl = require('bl');


var count = 0;
var responses = [ ];

var printResponses = function()
{
	for(var i = 0; i < 3; i++)
	{
		console.log(responses[i]);
	}
}
var getHTTP = function(index){
	http.get(process.argv[index+2], function(response){
		response.pipe(bl(function(err, data){
			if(err) throw err;
			responses[index] = data.toString();
			count++;
			if(count === 3)
			{
				printResponses();
			}

		}));
	});
}


for(var i = 0; i < 3; i++)
{
	getHTTP(i);
}
