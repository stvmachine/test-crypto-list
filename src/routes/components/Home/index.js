import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableInfo from './TableInfo';
import { getTickers } from '../../../api';
import { loadTickers } from '../../../actions';
import APPCONFIG from '../../../constants/Config';
import tickerPropType from '../../../custom_propTypes';

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
    const {
      tickers: { USD },
    } = this.state;
    return USD && USD.length ? <TableInfo data={USD} /> : null;
  }
}

const mapStateToProps = state => ({
  tickers: state.fetching.tickers ? state.fetching.tickers : [],
});

const mapDispatchToProps = {
  _loadTickers: loadTickers,
};

const tabsCurrencies = PropTypes.shape({
  USD: PropTypes.arrayOf(tickerPropType),
  EUR: PropTypes.arrayOf(tickerPropType),
  GBP: PropTypes.arrayOf(tickerPropType),
  JPY: PropTypes.arrayOf(tickerPropType),
  BTC: PropTypes.arrayOf(tickerPropType),
  ETH: PropTypes.arrayOf(tickerPropType),
});

Home.propTypes = {
  _loadTickers: PropTypes.func.isRequired,
  tickers: tabsCurrencies.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
