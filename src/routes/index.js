import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import withRoot from '../withRoot';

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
};

const Routes = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <Content />
    <Footer />
  </div>
);

Routes.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default withRoot(withStyles(styles)(Routes));
