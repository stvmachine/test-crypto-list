## Why does this repository exist?
This is the result of a code challenge that involved the following technologies: ReactJS, Material UI, Redux, Jest and Rest API. The structure is simple, but it follows good practices from the first commit such as the use of javascript linter (ESLint), the use of propTypes, it also shows a clear separation and definition of components, reducers and actions.

See the screenshots at the end of this document to see the results.


## How to use
1. Download the example [or clone the repo]

2. Install it and run:

```bash
yarn install
yarn start
```
3. Allow CORS: We are calling an external API and the app receives CORS error. To fix this and run the project correctly, please try on a browser with an extension that allows CORS (e.g.: Google Chrome). 



## Run the test:
```bash
brew install watchman
yarn test
```

### Some problems that I had and comments:
1. react-router (v4) 
This is the latest version of react-router and well is different. The routes are no more static and the routing is created when the app is rendering. Well, is easier than before but I got problems at the beginning when I tried to connect with redux. 
 
2. API v2 of Bitfinex still on beta
The endpoint *https://api.bitfinex.com/v1/symbols* works correctly. But the v2 doesn't have a service for symbols, on the other hand to get the tickers is necessary to use **specific symbols**. So, there is no way to obtain the needed symbols and the results from v1 are incompatible with the new version, so for the moment, it is only possible to use the old service, although the other option offers more interesting data. [READ MORE](https://github.com/bitfinexcom/bitfinex-api-node/issues/85).

3. The API does not group the ticker by currency, so the client has to do it.

4. I implemented methods to save the state of redux in the local storage. At the moment, by default try to save only the tickers. Check the 'localStorage.js' and 'configApp.js'. The type of action to save/not save to local storage is called CHANGE_SAVE_TICKERS.

5. Try using the console, in this way you can see the records that redux-logger does.

## Screenshots

![Home](/screenshots/1.png?raw=true)

![Detail](/screenshots/2.png?raw=true)


## Guides used:
1. For type checking with propTypes: 
    - https://reactjs.org/docs/typechecking-with-proptypes.html
2. For run tests on create-react-app: 
    - https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests
3. To install react-router v4 and the connection with redux: 
    - https://reacttraining.com/react-router/web/guides/philosophy
    - https://github.com/supasate/connected-react-router


**Thanks to all the authors and collaborators of libraries that have been used on this project. Keep up the good work!.**
