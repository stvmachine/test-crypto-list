import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

import TabsTickers from './TabsTickers';
import { getTickers } from '../../../api';
import { loadTickers } from '../../../actions';
import { tabsCurrencies } from '../../../custom_propTypes';
import APPCONFIG from '../../../constants/Config';

class Home extends React.Component {
  state = {
    tickers: {},
  };

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

  render() {
    const { tickers } = this.state;
    return (
      <div>
        <TabsTickers data={tickers} />
      </div>
    );
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
