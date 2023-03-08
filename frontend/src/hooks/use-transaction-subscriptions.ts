import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTransaction, deleteTransaction } from '../state/action-creators';
import { useTypedSelector } from './use-typed-selector';

export const useTransactionSubscriptions = () => {
  const dispatch = useDispatch();
  const { newTransaction, removedTransactionId } = useTypedSelector(
    (state) => state.transaction
  );
  useEffect(() => {
    if (newTransaction) {
      dispatch(createTransaction(newTransaction) as any);
    }
  }, [newTransaction, dispatch]);

  useEffect(() => {
    if (removedTransactionId) {
      dispatch(deleteTransaction(removedTransactionId) as any);
    }
  }, [removedTransactionId, dispatch]);
};
