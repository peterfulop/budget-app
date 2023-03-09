import { FilterState } from '../../types/enums';
import { Transaction } from '../../types/interfaces';

export interface IReplaceTransactionsAction {
  payload: Transaction[];
}

export interface IAddTransactionAction {
  payload: Transaction;
}

export interface IDeleteTransactionAction {
  payload: string;
}

export interface ISetFilterStateAction {
  payload: FilterState;
}

export interface ISetSearchKeywordAction {
  payload: FilterState;
}
