const http = require('node:http');

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello World</title>
    <style>
      :root { color-scheme: light dark; font-family: system-ui, sans-serif; }
      body { min-height: 100vh; margin: 0; display: grid; place-items: center; }
      h1 { font-size: clamp(3rem, 10vw, 7rem); letter-spacing: -0.05em; }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`;

http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(page);
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Not Found');
}).listen(port, host, () => {
  console.log(`Development server listening on http://${host}:${port}`);
});
