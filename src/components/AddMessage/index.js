import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../../store/actions';

class AddMessage extends Component {
  state = { value: '' };

  handleChange = e => this.setState({ value: e.target.value });

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.addMessage(this.state.value, this.props.currentUser);
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <div id="add-message">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { addMessage })(AddMessage);
