const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 8080 is already in use. Please choose a different port.');
    process.exit(1);
  } else {
    console.error('An error occurred:', err);
    process.exit(1);
  }
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

//The improved code includes an 'error' event listener which handles listen failures gracefully.  It specifically checks for the 'EADDRINUSE' error (port already in use), providing a helpful message, and handles other errors too.