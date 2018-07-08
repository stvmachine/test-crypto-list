### Readme

## For run the project
yarn install
yarn start

## For run the test:
brew install watchman
yarn test


## Problems with bitfinex
For the API v1 the endpoint https://api.bitfinex.com/v1/symbols works correctly. But the v2 don't have the call (e.g./v2/symbols), and the only way to obtain the tickers is ussing the correct symbols on the new call for tickers (v2/tickers). The problem is the symbols from v1 and v2 are incompatible between them, so makes v2 not useful for the operations on this test.

https://github.com/bitfinexcom/bitfinex-api-node/issues/85

## Notices changes on react-router v4
https://github.com/supasate/connected-react-router

##Guide used for typecheking with propTypes
https://reactjs.org/docs/typechecking-with-proptypes.html

##Guide used for tests
https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests