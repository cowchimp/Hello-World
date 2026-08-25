const http = require('http');
const fs = require('fs');

const content = fs.readFileSync('./README', 'utf8').trim();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html>
<html>
<head><title>Hello World</title>
<style>
  body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f5f5f5; }
  h1 { font-size: 3rem; color: #333; }
</style>
</head>
<body><h1>${content}</h1></body>
</html>`);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});
