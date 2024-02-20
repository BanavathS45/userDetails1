const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', (event) => {
  console.log('Connected to the server');
});

ws.addEventListener('message', (event) => {
  const notificationContainer = document.getElementById('notification-container');
  const message = document.createElement('div');
  message.textContent = event.data;
  notificationContainer.appendChild(message);
});

ws.addEventListener('close', (event) => {
  console.log('Connection closed');
});
