import React from 'react';
import { connect } from 'react-redux';
import User from '../User';

const UsersList = ({ users = [] }) => (
  <div id="users-list">
    <strong>users conected</strong>
    <ul>{users.map(m => <User key={m.id} {...m} />)}</ul>
  </div>
);

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps)(UsersList);
