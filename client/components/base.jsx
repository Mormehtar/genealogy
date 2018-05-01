import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Paper from './material/paper.jsx';

import E404 from './e404.jsx';

class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MuiThemeProvider>
      <Router>
        <div>
          <Paper>
            <Switch>
              <Route component={E404}/>
            </Switch>
          </Paper>
        </div>
      </Router>
    </MuiThemeProvider>
  }
}

export default Base;


