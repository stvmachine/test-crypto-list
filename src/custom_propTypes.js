import PropTypes from 'prop-types';

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

export default tickerPropType;
