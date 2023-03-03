import axios from 'axios';
import { useState } from 'react';

export const useDeleteTransaction = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[] | null>(null);

  const deleteTransaction = async (input: { id: string }) => {
    setLoading(true);
    setErrors(null);
    try {
      const res = await axios.delete(
        `http://localhost:5100/api/transactions/delete/${input.id}`
      );
      setLoading(false);
      if (res.data.success) {
        setSuccess(true);
      }
    } catch (error: any) {
      setLoading(false);
      setErrors(error.response.data.errors);
    }
  };

  return {
    success,
    loading,
    errors,
    setErrors,
    deleteTransaction,
  };
};