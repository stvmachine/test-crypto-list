import axios from 'axios';
// import { isNaN, mapValues } from 'lodash';
import APPCONFIG from '../constants/Config';

const baseURL = 'https://api.bitfinex.com';

/* -------------------------Status-------------------------------------*/
export function getStatus() {
  return axios.get(`${baseURL}/v2/platform/status`);
}

/* -------------------------Status-------------------------------------*/
export function getSymbols() {
  return axios.get(`${baseURL}/v1/symbols`).then(response => response.data);
}

/* ------------------------Tickers-------------------------------------*/
export function getTicker(symbol) {
  return axios
    .get(`${baseURL}/v1/pubticker/${symbol}`)
    .then((response) => {
      const { data } = response;
      const item = Object.assign({}, data);
      // Apparently it's not included the param 'pair' when it's called v1/ticker
      item.pair = symbol;
      APPCONFIG.currencies.forEach((c) => {
        const regexExpression = `${c}$`;
        if (item.pair.match(regexExpression)) {
          const regex = new RegExp(regexExpression, 'i');
          item.icon = item.pair.replace(regex, '');
        }
      });
      return item;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      return [];
    });
}

export function getTickers() {
  return axios
    .get(`${baseURL}/v1/tickers`)
    .then((response) => {
      const { data } = response;
      const output = {};

      // We know the currencies, so we need to map the pairs with that.
      // The hint we have is the format of the pairs is NAME_COIN+CURRENCY e.g. (ETHUSD).
      // So we need to look for a regex that match that condition "CURRENCY$"
      APPCONFIG.currencies.forEach((c) => {
        const regexExpression = `${c}$`;
        const value = data.filter(ticker => ticker.pair.match(regexExpression)).map((ticker) => {
          const item = Object.assign({}, ticker);
          const regex = new RegExp(regexExpression, 'i');
          item.icon = item.pair.replace(regex, '');
          return item;
        });
        output[c] = value;
      });

      return output;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      return [];
    });
}
