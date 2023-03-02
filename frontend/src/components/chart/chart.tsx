import { Doughnut } from 'react-chartjs-2';
import { useCashflowTracking } from '../../hooks/cashflow-tracking.hook';
import { Transaction } from '../../types';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DougnutChart = (props: { transactions: Transaction[] }) => {
  const { transactions } = props;
  const { budget, spentSoFar, remaining } = useCashflowTracking({
    transactions,
  });

  const data = {
    datasets: [
      {
        data: [budget, spentSoFar, remaining],
        backgroundColor: ['#0275d8', '#d9534f', '#5cb85c'],
      },
    ],
  };

  return <Doughnut data={data} style={{ padding: '1rem' }} />;
};
