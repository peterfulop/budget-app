import { Currency } from '../../translate/translate.scema';
import { thousandSeparator } from '../../utils/thousand-separator';
import { TrackingItem } from './cash-flow-tracking.styled';

type CashFlowTrackingItemProps = {
  title: string;
  amount: number;
  color?: string;
};

export const CashFlowTrackingItem = (props: CashFlowTrackingItemProps) => {
  const { title, amount, color } = props;
  return (
    <TrackingItem style={{ background: color }}>
      <p>{title}</p>
      <h4>{thousandSeparator(amount, Currency.HUF)}</h4>
    </TrackingItem>
  );
};
