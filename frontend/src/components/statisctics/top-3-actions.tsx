import { useEffect, useState } from 'react';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { FilterState, Transaction } from '../../types';
import { thousandSeparator } from '../../utils/thousand-separator';
import { Top3List, TopListContainer } from './statistic.styled';

type Top3ActionProps = {
  transactions: Transaction[];
  filterState: FilterState;
};

export const Top3Action = (props: Top3ActionProps) => {
  const { transactions, filterState } = props;
  const [topExpenses, setTopExpenses] = useState<Transaction[]>([]);

  useEffect(() => {
    if (transactions) {
      const sortedExpenses = transactions.sort((a, b) => b.amount - a.amount);
      if (sortedExpenses.length > 0) {
        if (sortedExpenses.length > 3) {
          const slicedExpenses = sortedExpenses.slice(0, 3);
          setTopExpenses(slicedExpenses);
        } else {
          setTopExpenses(sortedExpenses);
        }
      } else {
        setTopExpenses([]);
      }
    }
  }, [transactions]);

  return (
    <TopListContainer>
      <p>
        {translate(TEXT.labels.top3)}
        <span id='filter-state'>{filterState}</span>
      </p>
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
