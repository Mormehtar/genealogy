const fs = require('fs');
const https = require('https');
const Koa = require('koa');

const config = require('./config');
const backend = require('./routes/backend');
const frontend = require('./routes/frontend');

const port = config.port;
const app = new Koa();

app.keys = config.keys;
app.proxy = config.proxy;

app.use(backend.routes());
app.use(frontend.routes());

if (config.proxy) {
  app.listen(port);
} else {
  const options = {
    key: fs.readFileSync(config.server.key),
    cert: fs.readFileSync(config.server.crt)
  };

  https.createServer(options, app.callback()).listen(port);
}

console.log('Run server on port:', port);
