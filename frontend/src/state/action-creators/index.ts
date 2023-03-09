import axios from 'axios';
import { API, CreateTransactionInput, Transaction } from '../../types';
import { transactionActions } from '../slices/transaction-slice';
import { uiActions } from '../slices/ui-slice';

export const createTransaction = (
  createTransactionInput: CreateTransactionInput
) => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: 'loading',
        title: 'New transaction',
        message: 'Creating new transaction ...',
      })
    );
    try {
      const { data } = await axios.post(
        API.BASE_URL.concat(API.CREATE_TRANSACTION),
        createTransactionInput
      );
      const transaction = data as Transaction;
      dispatch(
        transactionActions.addTransaction({
          transaction,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'New transaction',
          message: 'Transaction successfully created!',
        })
      );
      dispatch(transactionActions.filterAndSearchTransactions());
    } catch (error: any) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Error on create transaction!',
        })
      );
    }
  };
};

export const deleteTransaction = (id: string) => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: 'loading',
        title: 'Delete transaction',
        message: 'Deleting transaction ...',
      })
    );
    try {
      const { data } = await axios.delete(
        API.BASE_URL.concat(API.DELETE_TRANSACTION.replace(':id', id))
      );
      if (data.success) {
        dispatch(
          transactionActions.deleteTransaction({
            id,
          })
        );
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Delete transaction',
            message: 'Transaction successfully deleted!',
          })
        );
        dispatch(transactionActions.filterAndSearchTransactions());
      }
    } catch (error: any) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Error on deleting transaction!',
        })
      );
    }
  };
};

export const getTransactions = () => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: 'loading',
        title: 'Get transactions',
        message: 'Fetching data ...',
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
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Transactions',
          message: 'Fetching data is ready!',
        })
      );
    } catch (error: any) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching transactions failed!',
        })
      );
    }
  };
};
