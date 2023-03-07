import { Transaction } from '../../types';
import { CreateTransactionActionType } from '../action-types/create-transaction-action-types';
import { CreateTransactionActions } from '../actions/create-transaction-actions';

interface CreateTransactionState {
  data: Transaction | null;
  loading: boolean;
  error: string | null;
}

const initialState: CreateTransactionState = {
  loading: false,
  error: null,
  data: null,
};

const createTransactionReducer = (
  state = initialState,
  action: CreateTransactionActions
): CreateTransactionState => {
  switch (action.type) {
    case CreateTransactionActionType.CREATE_TRANSACTIONS:
      return { loading: true, error: null, data: null };
    case CreateTransactionActionType.CREATE_TRANSACTIONS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case CreateTransactionActionType.CREATE_TRANSACTIONS_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export default createTransactionReducer;
