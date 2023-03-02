import { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ITransactions, Transaction } from '../../types';
import { CashFlowListItem } from './cashflow-list-tem';

const List = styled.div({
  border: `1px solid ${theme.colors.lightGray}`,
  borderRadius: '4px',
  ':last-of-type': {
    borderBottom: 'none',
  },
  margin: '16px 0',
});

interface ICashFlowList extends ITransactions {
  transactions: Transaction[];
}

export const CashFlowList: FC<ICashFlowList> = ({ transactions, refetch }) => {
  return (
    <List>
      {transactions.length ? (
        transactions.map((trans, index) => {
          return (
            <CashFlowListItem
              key={index}
              id={trans.id}
              name={trans.name}
              amount={trans.amount}
              income={trans.income}
              refetch={refetch}
            />
          );
        })
      ) : (
        <p>no list items yet...</p>
      )}
    </List>
  );
};
