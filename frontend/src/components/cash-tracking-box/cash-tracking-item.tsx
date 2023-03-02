import styled from 'styled-components';
import { Currency } from '../../translate/translate.scema';
import { thousandSeparator } from '../../utils/thousand-separator';

const CashTrackingBox = styled.div({
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
    fontFamily: 'Alegreya',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '20px',
  },
  h4: {
    fontFamily: 'Alegreya Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '20px',
  },
});

type CashTrackingBoxItemProps = {
  title: string;
  amount: number;
  color?: string;
};

export const CashTrackingBoxItem = (props: CashTrackingBoxItemProps) => {
  const { title, amount, color } = props;
  return (
    <CashTrackingBox style={{ background: color }}>
      <p>{title}</p>
      <h4>{thousandSeparator(amount, Currency.HUF)}</h4>
    </CashTrackingBox>
  );
};
