import { FC } from 'react';
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
  marginRight: '20px',
  background: theme.colors.red,
  fontFamily: theme.fonts.alegreyaSans,
});

const DeleteBtn = styled.button({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: 'none',
  padding: '7px',
  borderRadius: '50%',
  background: theme.colors.darkGray,
  height: '22px',
});

const ListItemAction = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
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
  const { data, deleteTransaction } = useTransactionActions();

  const handleClick = async () => {
    await deleteTransaction({ id });
    if (data) await refetch();
  };

  return (
    <ListItem>
      <p>{name}</p>
      <ListItemAction>
        <AmountBox
          style={{
            background: `${income ? theme.colors.green : theme.colors.red}`,
          }}
        >
          {thousandSeparator(amount, Currency.HUF)}
        </AmountBox>
        <DeleteBtn onClick={handleClick}>
          <img src={DeleteIcon} alt={translate(TEXT.buttons.delete)} />
        </DeleteBtn>
      </ListItemAction>
    </ListItem>
  );
};
