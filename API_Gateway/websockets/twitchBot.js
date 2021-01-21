const listen = socket => {
  socket.on('ping', () => {
    socket.emit('pong');
  });
};

module.exports = { listen };
