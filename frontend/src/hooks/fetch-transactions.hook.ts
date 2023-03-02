import axios from 'axios';
import { useEffect, useState } from 'react';
import { Transaction } from '../types';

export const useFetchTransactions = () => {
  const [data, setData] = useState<Transaction[]>([]);
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
        setData(res.data.data);
      }
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
    getTransactions,
  };
};
