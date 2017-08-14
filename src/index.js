import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

import CardsIndex from './components/routes/Cards_Index';
import CardsShow from './components/routes/Cards_Show';
import LandingPage from './components/routes/Landing_Page';
import NotFound_Route from './components/routes/NotFound_Route'

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={CardsIndex} />
        <Route path="/cards" component={CardsIndex} />
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound_Route} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
