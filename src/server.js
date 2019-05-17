var http = require('http');
var router = require('./router.js');

var server = http.createServer(router);

server.listen(4000, function () {
  console.log('Server is listening on port 4000. Ready to accept requests!');
});
