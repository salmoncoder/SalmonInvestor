import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Home from './Home';
import Login from './Login';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';

class Routing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default compose(withWidth())(Routing);
