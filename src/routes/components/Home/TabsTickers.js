import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabContent from './TabContent';
import APPCONFIG from '../../../constants/Config';
import { tabsCurrencies } from '../../../custom_propTypes';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class TabsTickers extends React.Component {
  state = {
    value: APPCONFIG.currencies[0],
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, data } = this.props;
    const { value } = this.state;

    return data[value] ? (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            {APPCONFIG.currencies.map(n => <Tab key={n} value={n} label={n} />)}
          </Tabs>
        </AppBar>
        {<TabContent data={data[value]} />}
      </div>
    ) : null;
  }
}

TabsTickers.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
  data: tabsCurrencies.isRequired,
};

export default withStyles(styles)(TabsTickers);
