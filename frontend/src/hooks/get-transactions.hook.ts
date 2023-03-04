import axios from 'axios';
import { useEffect, useState } from 'react';
import { API, Transaction } from '../types';

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[] | null>(null);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    setLoading(true);
    setErrors(null);
    try {
      const res = await axios.get(API.GET_TRANSACTIONS);
      if (res.data) {
        const sortedTransactions: Transaction[] = res.data.transactions.sort(
          (a: Transaction, b: Transaction) =>
            Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
        setTransactions(sortedTransactions);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setErrors([error.message]);
    }
  };

  return {
    transactions,
    loading,
    errors,
    getTransactions,
  };
};
