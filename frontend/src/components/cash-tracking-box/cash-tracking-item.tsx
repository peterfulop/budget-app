import styled from 'styled-components';

const CashTrackingBox = styled.div({
  flex: '1',
});

type CashTrackingBoxItemProps = {
  title: string;
  amount: number;
};

export const CashTrackingBoxItem = (props: CashTrackingBoxItemProps) => {
  const { title, amount } = props;
  return (
    <CashTrackingBox>
      <p>{title}</p>
      <h5>{amount}</h5>
    </CashTrackingBox>
  );
};
