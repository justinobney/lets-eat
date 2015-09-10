import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {devTools} from 'redux-devtools';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import {uiState} from 'reducers/uiState';
import apiMiddleware from 'actions/apiMiddleware';

let reducerTree = {
  uiState,
  forms: formReducer
};

let buildStore;
/* eslint-disable */
if (__DEBUG__) {
/* eslint-enable */
  buildStore = compose(applyMiddleware(thunk, apiMiddleware), devTools(), createStore);
} else {
  buildStore = compose(applyMiddleware(thunk), createStore);
}

export default buildStore(combineReducers(reducerTree));
