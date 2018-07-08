import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TabsTickers from './TabsTickers';
import { getTickers } from '../../../api';
import { loadTickers } from '../../../actions';
import APPCONFIG from '../../../constants/Config';
import { tabsCurrencies } from '../../../custom_propTypes';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      tickers: {},
    };
  }

  componentWillMount() {
    const { tickers, _loadTickers } = this.props;
    if (APPCONFIG.resetFetchedData) {
      getTickers().then((incomingTickers) => {
        this.setState({ tickers: incomingTickers });
        _loadTickers(incomingTickers);
      });
    } else {
      this.setState({ tickers });
    }
  }

  render() {
    const { tickers } = this.state;
    return <TabsTickers data={tickers} />;
  }
}

const mapStateToProps = state => ({
  tickers: state.fetching.tickers ? state.fetching.tickers : [],
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
