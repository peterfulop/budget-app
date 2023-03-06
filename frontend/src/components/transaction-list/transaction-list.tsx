import { FC } from 'react';
import { transactionApi } from '../../redux/services/transactions';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Transaction } from '../../types';
import { ErrorMessage } from '../common-styled-components/error-message.styled';
import { TransactionListItem } from './transaction-list-tem';
import { List, ListItem } from './transaction-list.styled';

interface ITransactionList {
  transactions: Transaction[];
}

export const TransactionList: FC<ITransactionList> = ({ transactions }) => {
  const [deleteTransaction, { isError }] =
    transactionApi.useDeleteTransactionMutation();

  if (isError) {
    return <ErrorMessage>{translate(TEXT.general.serverError)}</ErrorMessage>;
  }

  return (
    <List>
      {!isError && transactions?.length ? (
        transactions.map((trans, index) => {
          return (
            <TransactionListItem
              key={index}
              id={trans.id}
              name={trans.name}
              amount={trans.amount}
              income={trans.income}
              deleteTransaction={deleteTransaction}
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
