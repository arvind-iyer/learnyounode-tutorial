var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, files) {
	if(err) throw err;
	for (file in files) {
		var ext = path.extname(files[file])
		if('.'+process.argv[3] == ext) 
			console.log(files[file]);
	}
});

