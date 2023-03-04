import { FC } from 'react';
import { useCashflowTracking } from '../../hooks/cashflow-tracking.hook';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Transaction } from '../../types';
import { TrackingContainer } from './cash-flow-tracking.styled';
import { CashFlowTrackingItem } from './cash-tracking-item';

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
