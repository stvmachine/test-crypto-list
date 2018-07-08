import axios from 'axios';
// import { isNaN, mapValues } from 'lodash';

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
    .get(`${baseURL}/v1/ticker/${symbol}`)
    .then((response) => {
      const { data } = response;
      // data = data.map(ticker => mapValues(ticker, elem => (isNaN(parseFloat(elem)) ? elem : parseFloat(elem))));
      return data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

export function getTickers() {
  return axios
    .get(`${baseURL}/v1/tickers`)
    .then((response) => {
      const { data } = response;
      // data = data.map(ticker => mapValues(ticker, elem => (isNaN(parseFloat(elem)) ? elem : parseFloat(elem))));
      return data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}
