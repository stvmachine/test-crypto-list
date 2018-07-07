import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

const styles = theme => ({
  content: {
    marginTop: theme.spacing.unit * 20,
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

const Content = ({ classes }) => <div className={classes.content} />;

Content.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRoot(withStyles(styles)(Content));
