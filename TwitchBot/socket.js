const ping = socket => {
  let startTime;

  setInterval(function () {
    startTime = Date.now();
    socket.emit('ping');
  }, 10000);

  socket.on('pong', () => {
    latency = Date.now() - startTime;
    console.log('Websocket ping ' + latency + ' ms');
  });
};

module.exports = {
  ping
};
