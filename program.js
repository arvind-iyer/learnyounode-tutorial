var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(error, data) {
  if (error) throw error;
  for (i in data) {
  console.log(data[i]);
  }
})
