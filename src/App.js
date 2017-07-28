import { MuiThemeProvider } from 'material-ui/styles';
import React, { Component } from "react";

import Routing from "./Routing";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Routing />
      </MuiThemeProvider>
    );
  }
}

export default App;
