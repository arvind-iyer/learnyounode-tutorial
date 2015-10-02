var fs = require('fs');
var path = require('path');

module.exports =  function(pathname, extension, callback){
  var filteredFiles = [];
  var data = fs.readdir(pathname, function(err, files){
    if (err) return callback(err, null);
    for (i in files){
      var ext = path.extname(files[i]);
      if(ext == '.'+extension)
        filteredFiles.push(files[i])
    }
    return callback(null, filteredFiles)
  })
}
