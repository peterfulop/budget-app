import { combineReducers } from 'redux';
import createTransactionReducer from './create-transaction-reducer';
import deleteTransactionReducer from './delete-transaction-reducer';
import getTransactionsReducer from './get-transactions-reducer';

const reducers = combineReducers({
  getTransactions: getTransactionsReducer,
  createTransaction: createTransactionReducer,
  deleteTransaction: deleteTransactionReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
