import { Transaction } from '../../types';
import { GetTransactionActionType } from '../action-types/get-transaction-action-types';
import { GetTransactionActions } from '../actions/get-transaction-actions';

interface GetTransactionsState {
  data: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: GetTransactionsState = {
  loading: false,
  error: null,
  data: [],
};

const getTransactionsReducer = (
  state = initialState,
  action: GetTransactionActions
): GetTransactionsState => {
  switch (action.type) {
    case GetTransactionActionType.GET_TRANSACTIONS:
      return { loading: true, error: null, data: [] };
    case GetTransactionActionType.GET_TRANSACTIONS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case GetTransactionActionType.GET_TRANSACTIONS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default getTransactionsReducer;
