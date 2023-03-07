import { Transaction } from '../../types';
import { CreateTransactionActionType } from '../action-types/create-transaction-action-types';

interface CreateTransactionAction {
  type: CreateTransactionActionType.CREATE_TRANSACTIONS;
}

interface CreateTransactionSuccessAction {
  type: CreateTransactionActionType.CREATE_TRANSACTIONS_SUCCESS;
  payload: Transaction;
}

interface CreateTransactionErrorAction {
  type: CreateTransactionActionType.CREATE_TRANSACTIONS_ERROR;
  payload: string;
}

export type CreateTransactionActions =
  | CreateTransactionAction
  | CreateTransactionSuccessAction
  | CreateTransactionErrorAction;
