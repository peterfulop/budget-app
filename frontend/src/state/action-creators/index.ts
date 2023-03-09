import axios from 'axios';
import { Dispatch } from 'redux';
import {
  API,
  AsyncProcessName,
  CreateTransactionInput,
  Status,
  Transaction,
} from '../../types';
import { asyncProcessActions } from '../slices/async-process-slice';
import { transactionActions } from '../slices/transaction-slice';

import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';

const sendRequest = async () => {
  const { data } = await axios.get(API.BASE_URL.concat(API.GET_TRANSACTIONS));
  if (!data) {
    throw new Error(
      translate(TEXT.notifications.getTransactions.error.message)
    );
  }
  return data;
};

const refetchTransactions = async (dispatch: Dispatch) => {
  const data = await sendRequest();
  const transactions = data as Transaction[];
  dispatch(transactionActions.replaceTransactions(transactions));
  dispatch(transactionActions.filterAndSearchTransactions());
  dispatch(
    asyncProcessActions.setAsyncprocess({
      status: Status.SUCCESS,
      processName: AsyncProcessName.CREATE_TRANSACTION,
    })
  );
};

export const getTransactions = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await sendRequest();
      const transactions = data as Transaction[];
      dispatch(transactionActions.replaceTransactions(transactions));
    } catch (error: any) {
      dispatch(
        asyncProcessActions.setAsyncprocess({
          status: Status.ERROR,
          processName: AsyncProcessName.GET_TRANSACTIONS,
        })
      );
    }
  };
};

export const createTransaction = (
  createTransactionInput: CreateTransactionInput
) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      asyncProcessActions.setAsyncprocess({
        status: Status.LOADING,
        processName: AsyncProcessName.CREATE_TRANSACTION,
      })
    );
    try {
      const { data } = await axios.post(
        API.BASE_URL.concat(API.CREATE_TRANSACTION),
        createTransactionInput
      );
      const transaction = data as Transaction;
      if (transaction) {
        await refetchTransactions(dispatch);
        dispatch(
          asyncProcessActions.setAsyncprocess({
            status: Status.SUCCESS,
            processName: AsyncProcessName.CREATE_TRANSACTION,
          })
        );
      }
    } catch (error: any) {
      dispatch(
        asyncProcessActions.setAsyncprocess({
          status: Status.ERROR,
          processName: AsyncProcessName.CREATE_TRANSACTION,
        })
      );
    }
  };
};

export const deleteTransaction = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      asyncProcessActions.setAsyncprocess({
        status: Status.LOADING,
        processName: AsyncProcessName.DELETE_TRANSACTION,
      })
    );
    try {
      const { data } = await axios.delete(
        API.BASE_URL.concat(API.DELETE_TRANSACTION.replace(':id', id))
      );
      if (data.success) {
        await refetchTransactions(dispatch);
        dispatch(
          asyncProcessActions.setAsyncprocess({
            status: Status.SUCCESS,
            processName: AsyncProcessName.DELETE_TRANSACTION,
          })
        );
      }
    } catch (error: any) {
      dispatch(
        asyncProcessActions.setAsyncprocess({
          status: Status.ERROR,
          processName: AsyncProcessName.DELETE_TRANSACTION,
        })
      );
    }
  };
};
