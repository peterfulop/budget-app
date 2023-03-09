import { useEffect, useState } from 'react';
import { Transaction } from '../types';
import { useTypedSelector } from './use-typed-selector';

export const useCashflowTracking = () => {
  const { transactions } = useTypedSelector((state) => state.transaction);

  const [budget, setBudget] = useState<number>(0);
  const [spentSoFar, setSpentSoFar] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);

  const sumByCondition = (props: {
    transactions: Transaction[];
    isIncome: boolean;
  }) => {
    const filtered = props.transactions
      .filter((trans) => trans.income === props.isIncome)
      .map((obj) => obj.amount);
    if (filtered.length > 0) {
      return filtered.reduce((a, b) => {
        return a + b;
      });
    } else {
      return 0;
    }
  };
  useEffect(() => {
    if (transactions?.length > 0) {
      const totalBudget = sumByCondition({ transactions, isIncome: true });
      const totalSpents = sumByCondition({ transactions, isIncome: false });
      setBudget(totalBudget);
      setSpentSoFar(totalSpents);
      setRemaining(totalBudget - totalSpents);
    }
  }, [transactions]);

  return {
    budget,
    spentSoFar,
    remaining,
  };
};
