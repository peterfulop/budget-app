import axios from 'axios';
import { Dispatch } from 'redux';
import { API, CreateTransactionInput, Transaction } from '../../types';
import { CreateTransactionActionType } from '../action-types/create-transaction-action-types';
import { DeleteTransactionActionType } from '../action-types/delete-transaction-action-types';
import { DeleteTransactionActions } from '../actions/delete-transaction-actions';
import { transactionActions } from '../slices/transaction-slice';
import { uiActions } from '../slices/ui-slice';

// export const getTransactions = () => {
//   return async (dispatch: Dispatch<GetTransactionActions>) => {
//     dispatch({
//       type: GetTransactionActionType.GET_TRANSACTIONS,
//     });
//     try {
//       const { data } = await axios.get(
//         API.BASE_URL.concat(API.GET_TRANSACTIONS)
//       );
//       const transactions = data as Transaction[];
//       dispatch({
//         type: GetTransactionActionType.GET_TRANSACTIONS_SUCCESS,
//         payload: transactions,
//       });
//     } catch (error: any) {
//       dispatch({
//         type: GetTransactionActionType.GET_TRANSACTIONS_ERROR,
//         payload: error.message,
//       });
//     }
//   };
// };

export const createTransaction = (
  createTransactionInput: CreateTransactionInput
) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: CreateTransactionActionType.CREATE_TRANSACTIONS,
    });
    try {
      const { data } = await axios.post(
        API.BASE_URL.concat(API.CREATE_TRANSACTION),
        createTransactionInput
      );
      const transaction = data as Transaction;
      dispatch(
        transactionActions.replacePendingTransaction({
          transaction,
        })
      );
    } catch (error: any) {
      dispatch({
        type: CreateTransactionActionType.CREATE_TRANSACTIONS_ERROR,
        payload: error.message,
      });
    }
  };
};

export const deleteTransaction = (id: string) => {
  return async (dispatch: Dispatch<DeleteTransactionActions>) => {
    dispatch({
      type: DeleteTransactionActionType.DELETE_TRANSACTIONS,
    });
    try {
      const { data } = await axios.delete(
        API.BASE_URL.concat(API.DELETE_TRANSACTION.replace(':id', id))
      );
      const { success } = data;
      dispatch({
        type: DeleteTransactionActionType.DELETE_TRANSACTIONS_SUCCESS,
        payload: success,
      });
    } catch (error: any) {
      dispatch({
        type: DeleteTransactionActionType.DELETE_TRANSACTIONS_ERROR,
        payload: error.message,
      });
    }
  };
};

/////////////////////////////////////////

export const getTransactions = () => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending ...',
        message: 'Sending cart data!',
      })
    );
    const sendRequest = async () => {
      const response = await fetch(API.BASE_URL.concat(API.GET_TRANSACTIONS));
      if (!response.ok) {
        throw new Error('Fetching transaction data failed!');
      }
      return await response.json();
    };
    try {
      const data = await sendRequest();
      const transactions = data as Transaction[];
      dispatch(
        transactionActions.replaceTransactions({
          transactions,
        })
      );
    } catch (error: any) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const fetchTransactionsData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(API.BASE_URL.concat(API.GET_TRANSACTIONS));
      if (!response.ok) {
        throw new Error('Fetching cart data failed!');
      }
      return await response.json();
    };
    try {
      const data = await fetchData();
      const transactions = data as Transaction[];
      dispatch(
        transactionActions.replaceTransactions({
          transactions,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
