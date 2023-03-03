import styled from 'styled-components';
import { theme } from '../../theme';
import { Currency } from '../../translate/translate.scema';
import { thousandSeparator } from '../../utils/thousand-separator';

const TrackingItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '22px 0',
  flex: '1',
  borderRadius: '8px',
  color: 'white',
  p: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '20px',
    fontFamily: theme.fonts.alegreya,
  },
  h4: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '20px',
    fontFamily: theme.fonts.alegreyaSans,
  },
});

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