import React, { Component } from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';

const styleSheet = createStyleSheet('Home', {
  flex: {
    flex: 1
  }
});

class Home extends Component {
  render() {
    return (
      <h1>Home Here</h1>
    );
  }
}

export default withStyles(styleSheet)(Home);
