import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

import CardsIndex from './components/Cards_Index';
import CreditCardsList from './components/CreditCardsList';
import GetttingStarted from './components/GettingStarted';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/cards" component={CreditCardsList} />
        <Route path="/dashboard" component={CardsIndex} />
        <Route path="/" component={GetttingStarted} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
