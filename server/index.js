const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8989 });
const users = [];

const returnUsers = users => ({
  type: 'GET_USERS',
  payload: { users }
});

const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(data);
    }
  });
};

wss.on('connection', handleConnection);

function handleConnection(ws) {
  ws.on('message', receiveMessage);
  ws.on('close', handleClose);
}

function receiveMessage(data) {
  const action = JSON.parse(data);

  switch (action.type) {
    case 'ADD_USER':
      this.clientId = action.payload.id;
      users.push(action.payload);
      const newData = JSON.stringify(returnUsers(users));
      broadcast(newData);
      break;
    case 'ADD_MESSAGE':
      broadcast(data, this);
      break;
    default:
      break;
  }
}

function handleClose() {
  const { clientId } = this;
  const currentUsers = users.filter(u => u.id !== clientId);
  const data = JSON.stringify(returnUsers(currentUsers));
  broadcast(data, this);
}
