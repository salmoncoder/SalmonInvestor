import React, { Component } from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';

const styleSheet = createStyleSheet('Login', {
  flex: {
    flex: 1
  }
});

class Login extends Component {
  render() {
    return (
      <h1>Login Here</h1>
    );
  }
}

export default withStyles(styleSheet)(Login);
