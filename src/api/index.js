import axios from 'axios';
import qs from 'qs';

const baseURL = 'https://api.bitfinex.com';

/* -------------------------Status-------------------------------------*/
export function getStatus() {
  return axios.get(`${baseURL}/v2/platform/status`);
}

/* -------------------------Status-------------------------------------*/
export function getSymbols() {
  return axios.get(`${baseURL}/v1/symbols`);
}

/* ------------------------Tickers-------------------------------------*/
export function getTickers(symbols) {
  const params = {
    symbols,
  };

  return axios
    .get(`${baseURL}/v2/tickers`, {
      params,
      // to process array of params
      paramsSerializer: (p) => {
        qs.stringify(p, { arrayFormat: 'repeat' });
      },
    })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}
