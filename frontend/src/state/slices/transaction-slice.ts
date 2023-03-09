import { createSlice } from '@reduxjs/toolkit';
import { FilterState, Transaction } from '../../types';
import {
  IReplaceTransactionsAction,
  ISetFilterStateAction,
  ISetSearchKeywordAction,
} from '../actions/transaction-actions';

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

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    replaceTransactions(state, action: IReplaceTransactionsAction) {
      state.transactions = [...action.payload];
      state.filteredTransactions = [...action.payload];
    },
    setFilterState(state, action: ISetFilterStateAction) {
      state.filterState = action.payload;
    },
    setSearchKeyword(state, action: ISetSearchKeywordAction) {
      state.searchKeyword = action.payload;
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
