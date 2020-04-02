import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default Root;
