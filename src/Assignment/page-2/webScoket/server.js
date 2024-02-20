const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send a welcome message to the connected client
  ws.send('Welcome to the live notification system!');

  // Simulate server-generated events
  setInterval(() => {
    const message = `Update at ${new Date().toLocaleTimeString()}`;
    ws.send(message);
  }, 5000); // Send updates every 5 seconds
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
