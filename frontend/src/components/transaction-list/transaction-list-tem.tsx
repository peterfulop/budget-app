import { FC, useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { thousandSeparator } from '../../utils/thousand-separator';
import {
  AmountBox,
  DeleteBtn,
  DeleteConfirmationBox,
  ListItem,
  ListItemData,
} from './transaction-list.styled';

interface ITransactionListItem {
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
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);
  const { deleteTransaction } = useActions();

  const { isLoading } = useTypedSelector((state) => state.asyncProcess);

  const handleClick = () => {
    setDeleteConfirmation(false);
    deleteTransaction(id);
  };

  return (
    <ListItem style={{ padding: `${deleteConfirmation ? '9px 24px' : ''}` }}>
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
        <DeleteBtn
          onClick={() => setDeleteConfirmation(true)}
          disabled={isLoading}
        >
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
