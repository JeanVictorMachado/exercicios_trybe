import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, {
    initialState,
    store = createMockStore(initialState),
  } = {},
) => ({ ...render(<Provider store={ store }>{component}</Provider>), store });

export default renderWithRedux;
