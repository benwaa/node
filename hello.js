var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var queryData = url.parse(req.url, true);
  console.log(queryData);
  res.writeHead(200);
  res.end('It works!');
});

server.listen(8080);
