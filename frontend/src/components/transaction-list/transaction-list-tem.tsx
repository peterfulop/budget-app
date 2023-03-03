import { FC, useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import { useTransactionActions } from '../../hooks/transaction-actions.hook';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { ITransactions } from '../../types';
import { thousandSeparator } from '../../utils/thousand-separator';
import {
  AmountBox,
  DeleteBtn,
  DeleteConfirmationBox,
  ListItem,
  ListItemData,
} from './transaction-list.styled';

interface ITransactionListItem extends ITransactions {
  id: string;
  name: string;
  amount: number;
  income: boolean;
}

export const TransactionListItem: FC<ITransactionListItem> = ({
  id,
  name,
  amount,
  income,
  refetch,
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);

  const { data, deleteTransaction } = useTransactionActions();

  const handleClick = async () => {
    setDeleteConfirmation(false);
    await deleteTransaction({ id });
    await refetch();
  };

  return (
    <ListItem style={{ padding: `${deleteConfirmation ? '6px 24px' : ''}` }}>
      {!deleteConfirmation && (
        <ListItemData>
          <p>{name}</p>
          <AmountBox
            style={{
              background: `${income ? theme.colors.green : theme.colors.red}`,
            }}
          >
            {thousandSeparator(amount, Currency.HUF)}
          </AmountBox>
        </ListItemData>
      )}
      {!deleteConfirmation ? (
        <DeleteBtn onClick={() => setDeleteConfirmation(true)}>
          <img src={DeleteIcon} alt={translate(TEXT.buttons.delete)} />
        </DeleteBtn>
      ) : (
        <DeleteConfirmationBox>
          <button
            type='button'
            id='confirm-delete'
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            {translate(TEXT.buttons.delete)}
          </button>
          <button
            type='button'
            id='withdraw-delete'
            onClick={() => setDeleteConfirmation(false)}
          >
            {translate(TEXT.buttons.back)}
          </button>
        </DeleteConfirmationBox>
      )}
    </ListItem>
  );
};
