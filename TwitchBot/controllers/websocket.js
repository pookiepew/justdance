const io = require('socket.io-client');

let socket;

const connect = () => {
  socket = io('ws://api_gateway:8000', { auth: { client: 'twitchBot' } });
  if (socket) {
    socket.on('connect', () => {
      console.log('socket.io connected');
      ping();
    });
    socket.on('disconnect', () => {
      socket.removeAllListeners();
      console.log('Websocket disconnected!');
    });
  }
};

const ping = () => {
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

module.exports = { connect };
