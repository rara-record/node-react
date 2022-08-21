import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
