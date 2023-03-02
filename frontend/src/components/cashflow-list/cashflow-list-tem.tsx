import { FC } from 'react';
import styled from 'styled-components';
import DeleteIcon from '../../assets/delete-icon.svg';
import { useTransactionActions } from '../../hooks/transaction-actions.hook';
import { theme } from '../../theme';
import { Currency } from '../../translate/translate.scema';
import { ITransactions } from '../../types';
import { thousandSeparator } from '../../utils/thousand-separator';

const ListItem = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '13px 24px',
  p: {
    fontFamily: theme.fonts.alegreyaSans,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
  },
  borderBottom: `1px solid ${theme.colors.lightGray}`,
});

const AmountBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '20px',
  padding: '5px 9px',
  color: 'white',
  fontFamily: theme.fonts.alegreyaSans,
  fontStyle: ' normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '12px',
  background: theme.colors.red,
  marginRight: '20px',
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

interface ICashFlowListItem extends ITransactions {
  id: string;
  name: string;
  amount: number;
  income: boolean;
}

export const CashFlowListItem: FC<ICashFlowListItem> = ({
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
          <img src={DeleteIcon} alt='Your SVG' />
        </DeleteBtn>
      </ListItemAction>
    </ListItem>
  );
};
