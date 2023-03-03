import axios from 'axios';
import { useState } from 'react';
import { CreateTransactionInput, Transaction } from '../types';

export const useTransactionActions = () => {
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
        'http://localhost:5100/api/transactions/create',
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

  const deleteTransaction = async (input: { id: string }) => {
    setLoading(true);
    setErrors([]);
    try {
      await axios.delete(
        `http://localhost:5100/api/transactions/delete/${input.id}`
      );
      setLoading(false);
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
    deleteTransaction,
  };
};
