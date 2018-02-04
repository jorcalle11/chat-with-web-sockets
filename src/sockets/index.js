import * as actions from '../store/actions';
import * as types from '../store/types';

export default function configuresocket(dispatch, username) {
  const socket = new WebSocket('ws://localhost:8989');

  socket.onopen = () => {
    const action = actions.addUser(username);
    dispatch(actions.setCurrentUser(action.payload.id));
    const message = JSON.stringify(action);
    socket.send(message);
  };

  socket.onmessage = e => {
    const action = JSON.parse(e.data);

    switch (action.type) {
      case types.ADD_MESSAGE:
        const { text, userId } = action.payload;
        dispatch(actions.messageReceived(text, userId));
        break;
      case types.ADD_USER:
      case types.GET_USERS:
        dispatch(action);
        break;
      default:
        break;
    }
  };

  return socket;
}
