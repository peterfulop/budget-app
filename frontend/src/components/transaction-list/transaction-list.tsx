import { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { ITransactions, Transaction } from '../../types';
import { ListItem, TransactionListItem } from './transaction-list-tem';

const List = styled.div({
  borderRadius: '4px',
  border: `1px solid ${theme.colors.lightGray}`,

  margin: '16px 0',
  maxHeight: '495px',
  overflow: 'auto',
});

interface ITransactionList extends ITransactions {
  transactions: Transaction[];
}

export const TransactionList: FC<ITransactionList> = ({
  transactions,
  refetch,
}) => {
  return (
    <List>
      {transactions?.length ? (
        transactions.map((trans, index) => {
          return (
            <TransactionListItem
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
        <ListItem>
          <p>{translate(TEXT.general.noTransactions)}</p>
        </ListItem>
      )}
    </List>
  );
};
