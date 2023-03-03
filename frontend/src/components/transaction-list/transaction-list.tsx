import { FC } from 'react';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { ITransactions, Transaction } from '../../types';
import { TransactionListItem } from './transaction-list-tem';
import { List, ListItem } from './transaction-list.styled';

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
