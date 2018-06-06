var http = require('http');
 
  //step 2) start the server
  http.createServer(function (req, res) {
 
  //set an HTTP header of 200 and the meta type
  res.writeHead(200, {'Content-Type': 'text/plain'});
 
  //write something to the request and end it
  res.end('Your node.js server is running on localhost:3000');
 
}).listen(3000);//step 3) listen for a request on port 3000

