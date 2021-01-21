const io = require('socket.io-client');

const socket = io('ws://localhost:8000', { path: '/bot' });

socket.on('connect', () => {
  console.log('socket.io connected');
});

let startTime;

setInterval(function () {
  startTime = Date.now();
  socket.emit('ping');
}, 5000);

socket.on('pong', () => {
  latency = Date.now() - startTime;
  console.log('Websocket ping ' + latency + ' ms');
});
