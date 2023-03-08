import { createSlice } from '@reduxjs/toolkit';
import { CreateTransactionInput, Transaction } from '../../types';

interface ITransactionSliceInitialState {
  transactions: Transaction[];
  newTransaction?: CreateTransactionInput;
  removedTransactionId?: string;
}

const initialState: ITransactionSliceInitialState = {
  transactions: [],
  newTransaction: undefined,
  removedTransactionId: undefined,
};

interface IReplaceTransactionAction {
  payload: { transactions: Transaction[] };
}

interface IAddTransactionAction {
  payload: {
    transaction: Transaction;
  };
}

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    replaceTransactions(state, action: IReplaceTransactionAction) {
      state.transactions = action.payload.transactions;
    },
    replacePendingTransaction(state, action: IAddTransactionAction) {
      const pendingTransactionIndex = state.transactions.findIndex(
        (transaction) => !transaction.id
      );
      state.transactions.splice(pendingTransactionIndex, 1);
      const newTransaction = action.payload.transaction;
      state.transactions.push(newTransaction);
    },
    addTransaction(state, action: IAddTransactionAction) {
      const newTransaction: Transaction = {
        ...action.payload.transaction,
      };
      state.transactions?.push(newTransaction);
      state.newTransaction = newTransaction;
    },
    deleteTransaction(state, action: { payload: { id: string } }) {
      const removeId = action.payload.id;
      const filteredState = state.transactions.filter(
        (transaction) => transaction.id !== removeId
      );
      state.transactions = [...filteredState];
      state.removedTransactionId = removeId;
    },
  },
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice;
