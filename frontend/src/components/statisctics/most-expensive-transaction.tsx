import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Currency } from '../../translate/translate.scema';
import { Transaction } from '../../types';
import { thousandSeparator } from '../../utils/thousand-separator';

export const StatContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '4px',
  padding: '13px 24px',
  color: 'white',
  fontStyle: 'normal',
  fontWeight: '900',
  fontSize: '18px',
  lineHeight: ' 24px',
  small: {
    fontWeight: '300',
  },
  margin: '16px 0',
  background: theme.colors.darkGray,
  fontFamily: theme.fonts.alegreyaSans,
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});

const MostExpensiceContainer = styled(StatContainer)({
  span: {
    '&:before': {
      content: '": "',
    },
  },
});

type MostExpensiveTransactionProps = {
  transactions: Transaction[];
};

export const MostExpensiveTransaction = (
  props: MostExpensiveTransactionProps
) => {
  const { transactions } = props;

  const [mostExpensiveAction, setMostExpensiveAction] = useState<
    Transaction | undefined
  >();

  useEffect(() => {
    if (transactions) {
      const maxAmount = transactions
        .filter((trans) => !trans.income)
        .sort((a, b) => b.amount - a.amount)[0];
      if (maxAmount) {
        setMostExpensiveAction(maxAmount);
      }
    }
  }, [transactions]);

  return (
    <MostExpensiceContainer>
      <p>{translate(TEXT.labels.mostExpensive)}</p>
      {mostExpensiveAction ? (
        <p>
          {mostExpensiveAction.name}
          <span>
            {thousandSeparator(mostExpensiveAction.amount, Currency.HUF)}
          </span>
        </p>
      ) : (
        <small>{translate(TEXT.general.noExpenses)}</small>
      )}
    </MostExpensiceContainer>
  );
};
