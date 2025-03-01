// Create web server
// 1. Create a web server
// 2. Get the comments from the comments.json file
// 3. Send the comments to the client

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // 2. Get the comments from the comments.json file
  fs.readFile('./comments.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.end('Error');
    } else {
      // 3. Send the comments to the client
      res.end(data);
    }
  });
});
server.listen(3000, '