let io;

const botSocket = {
  init: httpServer => {
    io = require('socket.io')(httpServer);
    return io;
  },
  getIO: () => {
    if (!io) throw new Error('IO not initialized!');
    return io;
  },
  listen: socket => {
    socket.on('ping', () => {
      socket.emit('pong');
    });
    socket.on('TwitchBot', data => {
      console.log(data);
    });
  }
};

module.exports = botSocket;
