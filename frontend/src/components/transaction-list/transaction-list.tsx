import { FC } from 'react';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
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
    <List>
      {filteredTransactions?.length ? (
        filteredTransactions.map((trans, index) => {
          return (
            <TransactionListItem
              key={index}
              id={trans.id}
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
