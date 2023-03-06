import { FC, useEffect } from 'react';
import { useDeleteTransaction } from '../../hooks/delete-transaction.hook';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { ITransactions, Transaction } from '../../types';
import { ErrorMessage } from '../common-styled-components/error-message.styled';
import { TransactionListItem } from './transaction-list-tem';
import { List, ListItem } from './transaction-list.styled';

interface ITransactionList extends ITransactions {
  transactions: Transaction[];
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const TransactionList: FC<ITransactionList> = ({
  transactions,
  refetch,
  setSearchKeyword,
}) => {
  const { success, errors, loading, deleteTransaction, setErrors } =
    useDeleteTransaction();

  useEffect(() => {
    if (!loading && success) {
      refetch();
      setSearchKeyword('');
    }
  }, [success]);

  return (
    <>
      {errors && errors?.length > 0 && (
        <>
          {errors.map((error, index) => {
            return (
              <ErrorMessage
                key={index}
                onClick={(e) => {
                  setErrors(null);
                  e.currentTarget.style.display = 'none';
                }}
              >
                {error}
              </ErrorMessage>
            );
          })}
        </>
      )}
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
    </>
  );
};
