import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Build from '@material-ui/icons/Build';
import Customizer from './Customizer';

const styles = {
  flex: {
    flex: 1,
  },
  configLabel: {
    color: 'white',
    paddingLeft: '3px',
  },
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      openCustomizer: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      openCustomizer: !prevState.openCustomizer,
    }));
  };

  render() {
    const { classes } = this.props;
    const { openCustomizer } = this.state;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Crypto Currencies
          </Typography>
          <Button onClick={this.toggleDrawer}>
            <Build />
            <div className={classes.configLabel}>
Configuration
            </div>
          </Button>
          <Customizer open={openCustomizer} handler={this.toggleDrawer} />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default withStyles(styles)(Header);
