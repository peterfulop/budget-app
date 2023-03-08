import { FC } from 'react';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Transaction } from '../../types';
import { TransactionListItem } from './transaction-list-tem';
import { List, ListItem } from './transaction-list.styled';

interface ITransactionList {
  transactions: Transaction[];
}

export const TransactionList: FC<ITransactionList> = ({ transactions }) => {
  // if (error) {
  //   return <ErrorMessage>{translate(TEXT.general.serverError)}</ErrorMessage>;
  // }

  return (
    <List>
      {transactions?.length ? (
        transactions.map((trans, index) => {
          return (
            <TransactionListItem
              key={index}
              id={trans.id as string}
              name={trans.name}
              amount={trans.amount}
              income={trans.income}
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
