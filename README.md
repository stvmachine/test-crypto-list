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
3. Allow CORS
We are calling an external API and the app receives CORS error. To fix this and run the project correctly, please try on a browser with an extension that allows CORS (e.g.: Google Chrome). 



## Run the test:
```bash
brew install watchman
yarn test
```


### Some problems I have:
1. react-router (v4) 
This is the latest version of react-router and well is different. The routes are no more static and the routing is created when the app is rendering. Well, is easier than before but I got problems at the beginning when I tried to connect with redux. 
 
2. API v2 of Bitfinex still on beta
The endpoint *https://api.bitfinex.com/v1/symbols* works correctly. But the v2 does not have a service for symbols (e.g.: v2/symbols) and the only way to get the tickers is requesting using the **specific symbols**. So, there is no way to obtain this symbols and the symbols used on v1 are incompatible with the new version, so for the moment, it is only possible to use the old service, although the other option offers more interesting data. [READ MORE](https://github.com/bitfinexcom/bitfinex-api-node/issues/85).

3. The API doesn't group the tickers for currency, so the client has to do it. 


## Screenshots

![Home](/screenshots/1.png?raw=true)

![Detail](/screenshots/2.png?raw=true)



##Guides used:
1. For type checking with propTypes: 
    - https://reactjs.org/docs/typechecking-with-proptypes.html
2. For run tests on create-react-app: 
    - https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests
3. To install react-router v4 and the connection with redux: 
    - https://reacttraining.com/react-router/web/guides/philosophy
    - https://github.com/supasate/connected-react-router


**Thanks to all the authors and collaborators of libraries that have been used on this project. Keep up the good work!.**
