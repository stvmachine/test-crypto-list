import PropTypes from 'prop-types';

export const tickerPropType = PropTypes.shape({
  mid: PropTypes.string,
  bid: PropTypes.string,
  ask: PropTypes.string,
  last_price: PropTypes.string,
  low: PropTypes.string,
  high: PropTypes.string,
  volume: PropTypes.string,
  timestamp: PropTypes.string,
  pair: PropTypes.string,
  icon: PropTypes.string,
});

export const tabsCurrencies = PropTypes.shape({
  USD: PropTypes.arrayOf(tickerPropType),
  EUR: PropTypes.arrayOf(tickerPropType),
  GBP: PropTypes.arrayOf(tickerPropType),
  JPY: PropTypes.arrayOf(tickerPropType),
  BTC: PropTypes.arrayOf(tickerPropType),
  ETH: PropTypes.arrayOf(tickerPropType),
});
