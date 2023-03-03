import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { useCashflowTracking } from '../../hooks/cashflow-tracking.hook';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Transaction } from '../../types';

const ChartBox = styled.div({
  h2: {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '32px',
    lineHeight: '44px',
    fontFamily: theme.fonts.alegreya,
  },
});

const PercentageBox = styled.div({
  width: '100%',
  height: '40px',
  position: 'absolute',
  top: '50%',
  left: '0',
  marginTop: '-65px',
  textAlign: 'center',
  zIndex: '100',
  h5: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '64px',
    lineHeight: '87px',
    fontFamily: theme.fonts.alegreya,
    '&:after': {
      content: '" %"',
    },
  },
  p: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '20px',
    color: theme.colors.darkGray,
    fontFamily: theme.fonts.alegreyaSans,
  },
});

ChartJS.register(ArcElement, Tooltip, Legend);

export const DougnutChart = (props: { transactions: Transaction[] }) => {
  const { transactions } = props;
  const { budget, spentSoFar, remaining } = useCashflowTracking({
    transactions,
  });

  const data = {
    datasets: [
      {
        data: [budget | 1, spentSoFar | 1, remaining | 1],
        backgroundColor: ['#0275d8', '#d9534f', '#5cb85c'],
      },
    ],
  };

  const percentage = Math.ceil((spentSoFar / budget) * 100);

  return (
    <ChartBox>
      <h2>{translate(TEXT.labels.chartTitle)}</h2>
      <div style={{ position: 'relative' }}>
        {!isNaN(percentage) && (
          <PercentageBox>
            <h5>{percentage}</h5>
            <p>{translate(TEXT.labels.chartPercentage)}</p>
          </PercentageBox>
        )}
        <Doughnut
          options={{ maintainAspectRatio: true, cutout: 110 }}
          data={data}
          style={{ padding: '1rem', width: '382px' }}
        />
      </div>
    </ChartBox>
  );
};
