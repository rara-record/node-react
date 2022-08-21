import { AnyAction, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import chartSlice from './chart';
import shoppingSlice from './shopping';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = (state: any, action: AnyAction) => {
  const combinedReducer = combineReducers({
    shopping: shoppingSlice.reducer,
    chart: chartSlice.reducer,
  });
  return combinedReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
