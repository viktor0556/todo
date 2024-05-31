const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  if (req.url === '/') {
    res.statusCode = 200;
    const data = fs.readFileSync('./views/index.html', 'utf8');
    res.end(data);
  } else if (req.url.startsWith('/user/')) {
    const userId = req.url.split('/')[2];
    const userDataPath = `./data/user_${userId}.json`;
    fs.readFile(userDataPath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('404 Not Found\n');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('404 Not Found\n');
      } else {
        let contentType = 'text/html';
        if (filePath.endsWith('.css')) {
          contentType = 'text/css';
        } else if (filePath.endsWith('.js')) {
          contentType = 'text/javascript';
        } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
          contentType = 'image/jpeg';
        } else if (filePath.endsWith('.png')) {
          contentType = 'image/png';
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(data);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});