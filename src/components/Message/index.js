import React from 'react';
import { connect } from 'react-redux';

const Message = ({ text, author }) => (
  <li>
    <strong>{author}</strong>: {text}
  </li>
);

const mapStateToProps = (state, { userId }) => ({
  author: state.users.find(u => u.id === userId).name
});

export default connect(mapStateToProps)(Message);
