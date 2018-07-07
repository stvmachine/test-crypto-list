import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSymbols } from '../../api';
import { loadTickers } from '../../actions';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      tickers: [],
    };
  }

  componentWillMount() {
    const { tickers, _loadTickers } = this.props;
    if (tickers.length === 0) {
      getSymbols().then((incomingTickers) => {
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
        <h2>
Home
        </h2>
        <div>
          <ul>
            {tickers.map(n => (
              <li key={n}>
                <Link to={`detail/${n}`}>
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
  tickers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
