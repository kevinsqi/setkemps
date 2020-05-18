const server = require('http').createServer();

const io = require('socket.io')(server);

let state = {
  lobbies: {},
};

io.on('connection', (client) => {
  console.log('Client connected:', client.id);

  client.on('join', (lobbyCode) => {
    console.log(`[join] ${client.id} joining lobby ${lobbyCode}`);

    client.emit('init', { cards: [] });
  });
  
  // TODO: disconnect, error handlers
});

const port = 3001;

server.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${port}...`);
});
