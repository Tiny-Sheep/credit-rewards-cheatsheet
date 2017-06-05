import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

import CardsIndex from './components/routes/Cards_Index';
import CreditCardsList from './components/routes/CreditCardsList';
import LandingPage from './components/routes/Landing_Page';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/cards" component={CreditCardsList} />
        <Route path="/dashboard" component={CardsIndex} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
