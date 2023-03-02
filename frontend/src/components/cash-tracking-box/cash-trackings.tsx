import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Transaction } from '../../types';
import { CashTrackingBoxItem } from './cash-tracking-item';

const CashTrackingBox = styled.div({
  display: 'flex',
  gap: '30px',
  margin: '40px 0',
});

type CashTrackingsProps = {
  transactions: Transaction[];
};

export const CashTrackings = (props: CashTrackingsProps) => {
  const { transactions } = props;

  const [budget, setBudget] = useState<number>(0);
  const [spentSoFar, setSpentSoFar] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(budget - spentSoFar);

  useEffect(() => {
    if (transactions.length > 0) {
      const budget = transactions
        .filter((trans) => trans.income)
        .map((obj) => obj.amount);
      if (budget) {
        const budgetSUM = budget.reduce((a, b) => {
          return a + b;
        });
        setBudget(budgetSUM);
      }
      const spentSoFar = transactions
        .filter((trans) => !trans.income)
        .map((obj) => obj.amount);
      if (spentSoFar) {
        const spentSoFarSUM = budget.reduce((a, b) => {
          return a + b;
        });
        setSpentSoFar(spentSoFarSUM);
      }
    }
    setRemaining(budget - spentSoFar);
  }, [transactions]);

  return (
    <CashTrackingBox>
      <CashTrackingBoxItem
        title={translate(TEXT.labels.budget)}
        amount={budget}
      />
      <CashTrackingBoxItem
        title={translate(TEXT.labels.remaining)}
        amount={remaining}
      />
      <CashTrackingBoxItem
        title={translate(TEXT.labels.spentSoFar)}
        amount={spentSoFar}
      />
    </CashTrackingBox>
  );
};
