const server = require('http').createServer();
const app = require('./app');
const startDb = require('./db');

function createApplication() {
  server.on('request', app);
}

function startServer() {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => console.log('Server started on port', PORT));
}

startDb
.then(createApplication)
.then(startServer)
.catch(err => console.error(err.stack));
