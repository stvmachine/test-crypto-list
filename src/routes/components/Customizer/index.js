import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { changeSaveTickers } from '../../../actions';

const styles = {
  drawer: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Customizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      saveOnLocalStorage: false,
    };
  }

  componentWillMount() {
    const { saveTickersOnLocalStorage } = this.props;

    // If tickers are equal the initial empty state, then fetch
    if (saveTickersOnLocalStorage) {
      this.setState({ saveOnLocalStorage: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    // The parent open/closes the dialog
    const { open } = this.props;
    if (nextProps.open !== open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
    const { _changeSaveTickers } = this.props;
    _changeSaveTickers(event.target.checked);
  };

  render() {
    const { open, saveOnLocalStorage } = this.state;
    const { classes, handler } = this.props;
    return (
      <Drawer anchor="right" open={open} onClose={handler} className={classes.drawer}>
        <div tabIndex={0} role="button" onClick={handler} onKeyDown={handler}>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Configuration
          </Typography>
          <FormControl component="fieldset" className={classes.fullList}>
            <FormGroup>
              <FormControlLabel
                control={(
                  <Switch
                    checked={saveOnLocalStorage}
                    onChange={this.handleChange('saveOnLocalStorage')}
                    value="saveOnLocalStorage"
                    color="primary"
                  />
)}
                label="Save on local storage"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  tickers: state.fetching.tickers ? state.fetching.tickers : [],
  saveTickersOnLocalStorage: state.config.saveTickersOnLocalStorage || false,
});

const mapDispatchToProps = {
  _changeSaveTickers: changeSaveTickers,
};

Customizer.propTypes = {
  open: PropTypes.bool.isRequired,
  saveTickersOnLocalStorage: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
  handler: PropTypes.func.isRequired,
  _changeSaveTickers: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Customizer));
