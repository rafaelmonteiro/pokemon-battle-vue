let express = require('express');
let fs = require('fs');
let port = process.env.PORT || 5000;

app = express();

app.get('*', (request, response, next) => {
  let path = __dirname + '/dist' + request.url;

  if(fs.existsSync(path)){
  	response.sendFile(path);
  	return;	
  }

  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);
console.log('server started on port: '+port);