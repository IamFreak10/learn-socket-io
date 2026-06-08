const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // socket.on('chat message', (msg) => {
  //   io.emit('chat message', msg);
  // });

  console.log('New User connected');
  setTimeout(function () {
    socket.send('Mahfj Sends you a message(sending from server)');
  }, 10000);
});
server.listen(3300, () => {
  console.log('listening on *:3300');
});
