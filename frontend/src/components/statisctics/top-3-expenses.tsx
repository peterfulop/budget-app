import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { Transaction } from '../../types';
import { thousandSeparator } from '../../utils/thousand-separator';
import { StatContainer } from './most-expensive-transaction';

const TopListContainer = styled(StatContainer)({
  flexDirection: 'column',
});

const Top3List = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '.5rem',
  '.amount': {
    '&:before': {
      content: '":\t"',
    },
  },
  '.index': {
    '&:after': {
      content: '".\t"',
    },
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});

type Top3ExpensesProps = {
  transactions: Transaction[];
};

export const Top3Expenses = (props: Top3ExpensesProps) => {
  const { transactions } = props;
  const [topExpenses, setTopExpenses] = useState<Transaction[]>([]);

  useEffect(() => {
    if (transactions) {
      const sortedExpenses = transactions
        .filter((trans) => !trans.income)
        .sort((a, b) => b.amount - a.amount);
      if (sortedExpenses.length > 0) {
        if (sortedExpenses.length > 3) {
          const slicedExpenses = sortedExpenses.slice(0, 3);
          setTopExpenses(slicedExpenses);
        } else {
          setTopExpenses(sortedExpenses);
        }
      }
    }
  }, [transactions]);

  return (
    <TopListContainer>
      <p>{translate(TEXT.labels.top3)}</p>
      {topExpenses.length > 0 ? (
        <Top3List
          style={{
            justifyContent: `${topExpenses.length < 3 && 'space-evenly'}`,
          }}
        >
          {topExpenses.map((trans, index) => {
            return (
              <p key={index}>
                <span className='index'>{index + 1}</span>
                {trans.name}
                <span className='amount'>
                  {thousandSeparator(trans.amount, Currency.HUF)}
                </span>
              </p>
            );
          })}
        </Top3List>
      ) : (
        <small>{translate(TEXT.general.noExpenses)}</small>
      )}
    </TopListContainer>
  );
};
