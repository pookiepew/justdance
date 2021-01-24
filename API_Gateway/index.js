const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');
const helmet = require('helmet');
const websocket = require('./websockets/twitchBot');

const HttpError = require('./utils/http-error');

const config = require('./utils/config');

const app = express();

app.use(cors());
app.use(volleyball);
app.use(helmet());
app.use(express.json());

app.use('/', require('./routes/index'));

app.use('/twitch-auth', require('./routes/twitchAuth'));

app.use('/twitch-bot', require('./routes/twitchBot'));

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({
    message: error.message || 'An unknown error occurred!',
    code: error.code || 500
  });
});

const port = config.PORT || 8000;

const server = app.listen(port, async () => {
  console.log(`http://${config.HOST}:` + server.address().port);

  const io = require('socket.io')(server);
  const botSocket = require('socket.io')(server, { path: '/bot' });

  io.on('connection', socket => {
    console.log(
      socket.handshake.auth.client,
      'service connected. ID:',
      socket.id
    );
    websocket.listen(socket);
  });

  botSocket.on('connection', socket => {
    console.log('twitchBot service connected. ID:', socket.id);
    websocket.listen(socket);
  });
});
