const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

// The above code has no error handling.  If there is an error listening on the port, it will crash the server silently.
// In a production environment, this is unacceptable.