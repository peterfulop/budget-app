import axios from 'axios';
import { useEffect, useState } from 'react';
import { Transaction } from '../types';

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5100/api/transactions');
      if (res.data) {
        setTransactions(res.data.transactions);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message as string);
    }
  };

  return {
    transactions,
    loading,
    error,
    getTransactions,
  };
};
