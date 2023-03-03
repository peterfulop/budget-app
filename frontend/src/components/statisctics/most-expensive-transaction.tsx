import { useEffect, useState } from 'react';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { Transaction } from '../../types';
import { thousandSeparator } from '../../utils/thousand-separator';
import { MostExpensiceContainer } from './statistic.styled';

type MostExpensiveTransactionProps = {
  transactions: Transaction[];
};

export const MostExpensiveTransaction = (
  props: MostExpensiveTransactionProps
) => {
  const { transactions } = props;

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
    <MostExpensiceContainer>
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
    </MostExpensiceContainer>
  );
};
