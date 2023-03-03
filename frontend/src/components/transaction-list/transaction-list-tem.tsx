import { FC, useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '../../assets/delete-icon.svg';
import { useTransactionActions } from '../../hooks/transaction-actions.hook';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { ITransactions } from '../../types';
import { thousandSeparator } from '../../utils/thousand-separator';

export const ListItem = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '13px 24px',
  borderBottom: `1px solid ${theme.colors.lightGray}`,
  p: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
    fontFamily: theme.fonts.alegreyaSans,
  },
});

const ListItemData = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginRight: '20px',
});

const AmountBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '20px',
  padding: '5px 9px',
  color: 'white',
  fontStyle: ' normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '12px',
  background: theme.colors.red,
  fontFamily: theme.fonts.alegreyaSans,
});

const DeleteBtn = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '7px',
  borderRadius: '50%',
  background: theme.colors.darkGray,
  height: '22px',
});

const DeleteConfirmationBox = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  button: {
    border: 'none',
    width: '100%',
    textAlign: 'center',
    borderRadius: '20px',
    padding: '6px 10px',
    color: 'white',
    fontStyle: ' normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '12px',
    fontFamily: theme.fonts.alegreyaSans,
  },
  '#withdraw-delete': {
    background: theme.colors.darkGray,
  },
  '#confirm-delete': {
    background: theme.colors.red,
  },
});

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
    await deleteTransaction({ id });
    if (data) await refetch();
  };

  return (
    <ListItem>
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
          <button id='confirm-delete' onClick={handleClick}>
            {translate(TEXT.buttons.delete)}
          </button>
          <button
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
