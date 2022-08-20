import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
