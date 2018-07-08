import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import Button from '@material-ui/core/Button';

import TabsTickers from './TabsTickers';
import Customizer from '../Customizer';
import { getTickers } from '../../../api';
import { loadTickers } from '../../../actions';
import { tabsCurrencies } from '../../../custom_propTypes';
import APPCONFIG from '../../../constants/Config';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      tickers: {},
      openCustomizer: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentWillMount() {
    const { tickers, _loadTickers } = this.props;

    // If tickers are equal the initial empty state, then fetch
    if (isEqual(tickers, APPCONFIG.fetching.tickers)) {
      getTickers().then((incomingTickers) => {
        this.setState({ tickers: incomingTickers });
        _loadTickers(incomingTickers);
      });
    } else {
      this.setState({ tickers });
    }
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      openCustomizer: !prevState.openCustomizer,
    }));
  };

  render() {
    const { tickers, openCustomizer } = this.state;
    return (
      <div>
        <Button onClick={this.toggleDrawer}>
Open
        </Button>
        <Customizer open={openCustomizer} handler={this.toggleDrawer} />
        <TabsTickers data={tickers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickers: state.fetching.tickers ? state.fetching.tickers : [],
  saveTickersOnLocalStorage: state.config.saveTickersOnLocalStorage || false,
});

const mapDispatchToProps = {
  _loadTickers: loadTickers,
};

Home.propTypes = {
  _loadTickers: PropTypes.func.isRequired,
  tickers: tabsCurrencies.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
