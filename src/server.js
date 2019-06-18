var http = require('http');
var router = require('./router.js');
var PORT = process.env.PORT || 4000;

var server = http.createServer(router);

server.listen(PORT, function () {
  console.log('Server is listening on port. Ready to accept requests!');
});
