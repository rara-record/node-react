import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';

import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
