const io = require('socket.io-client');

const connection = require('./socket');

const socket = io('ws://api_gateway:8000', { path: '/bot' });

socket.on('connect', () => {
  console.log('socket.io connected');
});

connection.ping(socket);
connection.listen(socket);

socket.on('disconnect', () => {
  socket.removeAllListeners();
  console.log('Websocket disconnected!');
});
