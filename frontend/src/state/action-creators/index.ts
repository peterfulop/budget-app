import axios from 'axios';
import { Dispatch } from 'redux';
import { API, CreateTransactionInput, Transaction } from '../../types';
import { CreateTransactionActionType } from '../action-types/create-transaction-action-types';
import { DeleteTransactionActionType } from '../action-types/delete-transaction-action-types';
import { GetTransactionActionType } from '../action-types/get-transaction-action-types';
import { CreateTransactionActions } from '../actions/create-transaction-actions';
import { DeleteTransactionActions } from '../actions/delete-transaction-actions';
import { GetTransactionActions } from '../actions/get-transaction-actions';

export const getTransactions = () => {
  return async (dispatch: Dispatch<GetTransactionActions>) => {
    dispatch({
      type: GetTransactionActionType.GET_TRANSACTIONS,
    });
    try {
      const { data } = await axios.get(
        API.BASE_URL.concat(API.GET_TRANSACTIONS)
      );
      const transactions = data as Transaction[];
      dispatch({
        type: GetTransactionActionType.GET_TRANSACTIONS_SUCCESS,
        payload: transactions,
      });
    } catch (error: any) {
      dispatch({
        type: GetTransactionActionType.GET_TRANSACTIONS_ERROR,
        payload: error.message,
      });
    }
  };
};

export const createTransaction = (
  createTransactionInput: CreateTransactionInput
) => {
  return async (dispatch: Dispatch<CreateTransactionActions>) => {
    dispatch({
      type: CreateTransactionActionType.CREATE_TRANSACTIONS,
    });
    try {
      const { data } = await axios.post(
        API.BASE_URL.concat(API.CREATE_TRANSACTION),
        createTransactionInput
      );
      const transactions = data as Transaction;
      dispatch({
        type: CreateTransactionActionType.CREATE_TRANSACTIONS_SUCCESS,
        payload: transactions,
      });
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
