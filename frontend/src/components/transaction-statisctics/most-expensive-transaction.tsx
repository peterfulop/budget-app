import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { Transaction } from '../../types/interfaces';
import { thousandSeparator } from '../../utils/thousand-separator';
import { MostExpensiveContainer } from './statistic.styled';

export const MostExpensiveTransaction = () => {
  const { transactions } = useTypedSelector((state) => state.transaction);

  const [mostExpensiveAction, setMostExpensiveAction] = useState<
    Transaction | undefined
  >();

  useEffect(() => {
    if (transactions) {
      const maxAmount = transactions
        .filter((trans) => !trans.income)
        .sort((a, b) => b.amount - a.amount)[0];
      if (maxAmount) {
        setMostExpensiveAction(maxAmount);
      }
    }
  }, [transactions]);

  return (
    <MostExpensiveContainer>
      <p>{translate(TEXT.labels.mostExpensive)}</p>
      {mostExpensiveAction ? (
        <p>
          {mostExpensiveAction.name}
          <span>
            {thousandSeparator(mostExpensiveAction.amount, Currency.HUF)}
          </span>
        </p>
      ) : (
        <small>{translate(TEXT.general.noExpenses)}</small>
      )}
    </MostExpensiveContainer>
  );
};
