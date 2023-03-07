import { Transaction } from '../../types';
import { GetTransactionActionType } from '../action-types/get-transaction-action-types';

interface GetTransactionAction {
  type: GetTransactionActionType.GET_TRANSACTIONS;
}

interface GetTransactionSuccessAction {
  type: GetTransactionActionType.GET_TRANSACTIONS_SUCCESS;
  payload: Transaction[];
}

interface GetTransactionErrorAction {
  type: GetTransactionActionType.GET_TRANSACTIONS_ERROR;
  payload: string;
}

export type GetTransactionActions =
  | GetTransactionAction
  | GetTransactionSuccessAction
  | GetTransactionErrorAction;
