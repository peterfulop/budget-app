import { FC } from 'react';
import styled from 'styled-components';
import { useCashflowTracking } from '../../hooks/cashflow-tracking.hook';
import { breakPoints, theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Transaction } from '../../types';
import { CashFlowTrackingItem } from './cash-tracking-item';

const TrackingContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  padding: '40px 0',
  borderTop: `1px solid ${theme.colors.lightGray}`,
  borderBottom: `1px solid ${theme.colors.lightGray}`,
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
    gap: '20px',
    padding: '20px 0',
  },
});

interface CashFlowTrackingProps {
  transactions: Transaction[];
}

export const CashFlowTrackings: FC<CashFlowTrackingProps> = ({
  transactions,
}) => {
  const { budget, spentSoFar, remaining } = useCashflowTracking({
    transactions,
  });

  return (
    <TrackingContainer>
      <CashFlowTrackingItem
        title={translate(TEXT.labels.budget)}
        amount={budget}
        color={theme.colors.blue}
      />
      <CashFlowTrackingItem
        title={translate(TEXT.labels.remaining)}
        amount={remaining}
        color={theme.colors.green}
      />
      <CashFlowTrackingItem
        title={translate(TEXT.labels.spentSoFar)}
        amount={spentSoFar}
        color={theme.colors.red}
      />
    </TrackingContainer>
  );
};
