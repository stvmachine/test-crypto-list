import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

const styles = {
  footer: {
    backgroundColor: '#04091e',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '1.625em',
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
  },
  heart: {
    color: '#e25555',
  },
};

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <div>
      Made with
      {' '}
      <span className={classes.heart}>
❤
        {' '}
      </span>
      {' '}
in Melbourne
    </div>
    <span>
      {' '}
© 2018 All rights reserved
    </span>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default withRoot(withStyles(styles)(Footer));
