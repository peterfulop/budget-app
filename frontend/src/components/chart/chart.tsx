import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useCashflowTracking } from '../../hooks/cashflow-tracking.hook';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { Transaction } from '../../types';
import { ChartBox, PercentageBox } from './chart.styled';

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

  let percentage = 100;
  if (budget === 0 && spentSoFar === 0 && remaining === 0) {
    percentage = 0;
  } else if (budget !== 0) {
    percentage = Math.ceil((spentSoFar / budget) * 100);
  }

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
          style={{
            padding: '1rem',
            width: '382px',
          }}
        />
      </div>
    </ChartBox>
  );
};
