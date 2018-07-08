import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import withRoot from '../../withRoot';
import Home from './Home';
import Detail from './Detail';

const styles = theme => ({
  content: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 10px',
  },
});

const Content = ({ classes }) => (
  <div className={classes.content}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
      <Redirect to="/" />
    </Switch>
  </div>
);

Content.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default withRoot(withStyles(styles)(Content));
