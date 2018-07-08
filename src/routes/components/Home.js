import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getTickers } from '../../api';
import { loadTickers } from '../../actions';
import APPCONFIG from '../../constants/Config';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

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
        console.log(incomingTickers);
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
    console.log(USD);
    const { classes } = this.props;
    return USD && USD.length ? (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
Coin
              </TableCell>
              {['BID', 'MID', 'ASK', 'Last price', 'Low', 'High', 'Volume'].map(title => (
                <TableCell numeric key={title}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {USD.map(n => (
              <TableRow key={n.pair}>
                <TableCell component="th" scope="row">
                  <Link to={`detail/${n.pair}`}>
                    {n.nameCoin || n.pair}
                  </Link>
                </TableCell>
                <TableCell numeric>
                  {n.mid}
                </TableCell>
                <TableCell numeric>
                  {n.bid}
                </TableCell>
                <TableCell numeric>
                  {n.ask}
                </TableCell>
                <TableCell numeric>
                  {n.last_price}
                </TableCell>
                <TableCell numeric>
                  {n.low}
                </TableCell>
                <TableCell numeric>
                  {n.high}
                </TableCell>
                <TableCell numeric>
                  {n.volume}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    ) : null;
  }
}

const mapStateToProps = state => ({
  tickers: state.fetching.tickers ? state.fetching.tickers : [],
});

const mapDispatchToProps = {
  _loadTickers: loadTickers,
};

const tickerPropType = PropTypes.shape({
  mid: PropTypes.string,
  bid: PropTypes.string,
  ask: PropTypes.string,
  last_price: PropTypes.string,
  low: PropTypes.string,
  high: PropTypes.string,
  volume: PropTypes.string,
  timestamp: PropTypes.string,
  pair: PropTypes.string,
});

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
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Home));
