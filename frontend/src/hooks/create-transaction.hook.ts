import axios from 'axios';
import { useState } from 'react';
import { API, CreateTransactionInput, Transaction } from '../types';

export const useCreateTransaction = () => {
  const [data, setData] = useState<Transaction>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[] | null>(null);

  const createTransaction = async (
    createTransactionInput: CreateTransactionInput
  ) => {
    setLoading(true);
    setErrors(null);
    try {
      const res = await axios.post(
        API.CREATE_TRANSACTION,
        createTransactionInput
      );
      if (res.data.transaction) {
        setLoading(false);
        setData(res.data.transaction);
      }
    } catch (error: any) {
      setLoading(false);
      setErrors(error.response.data.errors);
    }
  };

  return {
    data,
    loading,
    errors,
    setErrors,
    createTransaction,
  };
};
