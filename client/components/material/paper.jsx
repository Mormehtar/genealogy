import {
  compose,
  setDisplayName,
  setPropTypes
} from 'recompose';
import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import paperStyle from './styles/paper';

const enhance = compose(
  setDisplayName('paper'),
  setPropTypes({
    children: PropTypes.any
  })
);

export default enhance(
  ({children}) =>
    <Paper style={paperStyle}>
      {children}
    </Paper>
);
