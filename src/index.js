import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

import CardsIndex from './components/Cards_Index';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={CardsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
