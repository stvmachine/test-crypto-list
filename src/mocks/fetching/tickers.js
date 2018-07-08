function mockTicker(currency) {
  return {
    mid: '0.0124955',
    bid: '0.01249',
    ask: '0.012501',
    last_price: '0.012503',
    low: '0.01218',
    pair: `BTC${currency}`,
    timestamp: '1531077237.071661817',
    volume: '16661.829568059995',
  };
}

const mockTickers = {
  USD: [mockTicker('USD')],
  EUR: [mockTicker('EUR')],
  GBP: [mockTicker('GBP')],
  JPY: [mockTicker('JPY')],
  BTC: [mockTicker('BTC')],
  ETH: [mockTicker('ETH')],
};

export default mockTickers;
