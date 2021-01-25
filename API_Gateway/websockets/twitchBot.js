let server;

const botSocket = {
  createServer: httpServer => {
    server = require('socket.io')(httpServer, { path: '/bot' });
    return server;
  },
  listen: socket => {
    socket.on('ping', () => {
      socket.emit('pong');
    });
    socket.on('test', () => {
      socket.emit('test');
    });
  },
  getServer: () => server
};

module.exports = botSocket;
