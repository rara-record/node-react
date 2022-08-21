import { AnyAction, combineReducers } from 'redux';
import shoppingSlice from './shopping';

const rootReducer = (state: any, action: AnyAction) => {
  const combinedReducer = combineReducers({
    shopping: shoppingSlice.reducer,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
