import axios from 'axios';
import { useState } from 'react';
import { CreateTransactionInput, Transaction } from '../types';

export const useTransactionActions = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createTransaction = async (
    createTransactionInput: CreateTransactionInput
  ) => {
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5100/api/transactions/create',
        createTransactionInput
      );
      if (res.data) {
        setData(res.data.data);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      setError(error.message as string);
    }
  };

  const deleteTransaction = async (input: { id: string }) => {
    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:5100/api/transactions/delete/${input.id}`
      );
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      setError(error.message as string);
    }
  };

  return {
    data,
    loading,
    error,
    createTransaction,
    deleteTransaction,
  };
};
