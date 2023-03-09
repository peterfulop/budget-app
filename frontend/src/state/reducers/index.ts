import { combineReducers } from 'redux';
import transactionSlice from '../slices/transaction-slice';
import uiSlice from '../slices/ui-slice';

const reducers = combineReducers({
  ui: uiSlice.reducer,
  transaction: transactionSlice.reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
