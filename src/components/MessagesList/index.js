import React from 'react';
import { connect } from 'react-redux';

import Message from '../Message';

const MessagesList = ({ messages = [] }) => (
  <ul id="messages-list">{messages.map(m => <Message key={m.id} {...m} />)}</ul>
);

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(MessagesList);
