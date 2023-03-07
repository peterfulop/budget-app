import { DeleteTransactionActionType } from '../action-types/delete-transaction-action-types';

interface DeleteTransactionAction {
  type: DeleteTransactionActionType.DELETE_TRANSACTIONS;
}

interface DeleteTransactionSuccessAction {
  type: DeleteTransactionActionType.DELETE_TRANSACTIONS_SUCCESS;
  payload: boolean;
}

interface DeleteTransactionErrorAction {
  type: DeleteTransactionActionType.DELETE_TRANSACTIONS_ERROR;
  payload: string;
}

export type DeleteTransactionActions =
  | DeleteTransactionAction
  | DeleteTransactionSuccessAction
  | DeleteTransactionErrorAction;
