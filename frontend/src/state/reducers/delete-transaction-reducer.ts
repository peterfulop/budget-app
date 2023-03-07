import { DeleteTransactionActionType } from '../action-types/delete-transaction-action-types';
import { DeleteTransactionActions } from '../actions/delete-transaction-actions';

interface DeleteTransactionState {
  data: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: DeleteTransactionState = {
  loading: false,
  error: null,
  data: false,
};

const deleteTransactionReducer = (
  state = initialState,
  action: DeleteTransactionActions
): DeleteTransactionState => {
  switch (action.type) {
    case DeleteTransactionActionType.DELETE_TRANSACTIONS:
      return { loading: true, error: null, data: false };
    case DeleteTransactionActionType.DELETE_TRANSACTIONS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case DeleteTransactionActionType.DELETE_TRANSACTIONS_ERROR:
      return { loading: false, error: action.payload, data: false };
    default:
      return state;
  }
};

export default deleteTransactionReducer;
