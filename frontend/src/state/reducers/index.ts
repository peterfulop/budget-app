import { combineReducers } from 'redux';
import transactionSlice from '../slices/transaction-slice';
import uiSlice from '../slices/ui-slice';
// import createTransactionReducer from './create-transaction-reducer';
// import deleteTransactionReducer from './delete-transaction-reducer';
// import getTransactionsReducer from './get-transactions-reducer';

const reducers = combineReducers({
  ui: uiSlice.reducer,
  transaction: transactionSlice.reducer,
  // fetchTransactions: fetchTransactionsData,
  // getTransactions: getTransactionsReducer,
  // createTransaction: createTransactionReducer,
  // deleteTransaction: deleteTransactionReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
