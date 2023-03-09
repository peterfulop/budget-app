import { createSlice } from '@reduxjs/toolkit';
import { FilterState, Transaction } from '../../types';

interface ITransactionSliceInitialState {
  transactions: Transaction[];
  filteredTransactions: Transaction[];
  filterState: FilterState;
  searchKeyword?: string;
}

const initialState: ITransactionSliceInitialState = {
  transactions: [],
  filteredTransactions: [],
  filterState: FilterState.ALL,
  searchKeyword: '',
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
      state.transactions = [...action.payload.transactions];
      state.filteredTransactions = [...action.payload.transactions];
    },
    addTransaction(state, action: IAddTransactionAction) {
      const newTransaction: Transaction = {
        ...action.payload.transaction,
      };
      const newTransactions = [newTransaction, ...state.transactions];
      const sortedTransactions = newTransactions.sort(
        (a: Transaction, b: Transaction) =>
          Number(b.createdAt) - Number(a.createdAt)
      );
      state.transactions = [...sortedTransactions];
    },
    deleteTransaction(state, action: { payload: { id: string } }) {
      const removeId = action.payload.id;
      const filteredState = state.transactions.filter(
        (transaction) => transaction.id !== removeId
      );
      const sortedTransactions = filteredState.sort(
        (a: Transaction, b: Transaction) =>
          Number(b.createdAt) - Number(a.createdAt)
      );
      state.transactions = [...sortedTransactions];
    },
    setFilterState(state, action: { payload: FilterState }) {
      state.filterState = action.payload;
    },
    setSearchKeyword(state, action: { payload: { searchKeyword: string } }) {
      state.searchKeyword = action.payload.searchKeyword;
    },
    filterAndSearchTransactions(state) {
      let filtered: Transaction[] = [];
      switch (state.filterState) {
        case FilterState.EXPENSES:
          filtered = state.transactions.filter((trans) => !trans.income);
          break;
        case FilterState.INCOMES:
          filtered = state.transactions.filter((trans) => trans.income);
          break;
        case FilterState.ALL:
          filtered = [...state.transactions];
          break;
      }
      let searchResult: Transaction[] = [];

      const keyword = state.searchKeyword;
      if (keyword) {
        const searchByName = filtered.filter((trans) => {
          return trans.name.toLowerCase().includes(keyword.toLowerCase());
        });
        const searchByAmount = filtered.filter((trans) => {
          return trans.amount
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase());
        });
        searchResult = [...searchByName, ...searchByAmount];
        const preFiltered = searchResult ? searchResult : filtered;
        const sortedTransactions = preFiltered.sort(
          (a: Transaction, b: Transaction) =>
            Number(b.createdAt) - Number(a.createdAt)
        );
        state.filteredTransactions = [...sortedTransactions];
      } else {
        state.filteredTransactions = [...filtered];
      }
    },
  },
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice;
