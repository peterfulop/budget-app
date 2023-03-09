import { FC } from 'react';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { TransactionListItem } from './transaction-list-tem';
import { List, ListItem } from './transaction-list.styled';

export const TransactionList: FC = () => {
  const { filteredTransactions } = useTypedSelector(
    (state) => state.transaction
  );

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
