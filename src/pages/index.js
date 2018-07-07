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

const Index = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <Content />
    <Footer />
  </div>
);

Index.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRoot(withStyles(styles)(Index));
