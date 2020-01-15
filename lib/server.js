const app = require('./app');
const http = require('http');

function createServer(passedPort, logMessage = `API running in http://localhost:${passedPort}`) {
  const port = process.env.PORT || passedPort;
  app.set('port', port);

  const server = http.createServer(app);

  server.listen(port);
  console.log(logMessage);
}

module.exports = createServer;