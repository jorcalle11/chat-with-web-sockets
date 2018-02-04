import React, { Component } from 'react';
import './App.css';

import MessagesList from './components/MessagesList';
import AddMessage from './components/AddMessage';
import UsersList from './components/UsersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersList />
        <main>
          <MessagesList />
          <AddMessage />
        </main>
      </div>
    );
  }
}

export default App;
