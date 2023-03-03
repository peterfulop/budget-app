import axios from 'axios';
import { useEffect, useState } from 'react';
import { Transaction } from '../types';

export const useFetchTransactions = () => {
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
      const res = await axios.get('http://localhost:5100/api/transactions');
      if (res.data) {
        setTransactions(res.data.transactions);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setErrors(error.response.data.errors);
    }
  };

  return {
    transactions,
    loading,
    errors,
    getTransactions,
  };
};
