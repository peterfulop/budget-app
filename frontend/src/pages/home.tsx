import styled from 'styled-components';
import { CashFlowTrackings } from '../components/cash-flow-tracking/cash-trackings';
import { DougnutChart } from '../components/chart/chart';
import { Content } from '../components/content/content';
import { Header } from '../components/header/header';
import { TransactionForm } from '../components/transaction-form/transaction-form';
import { useFetchTransactions } from '../hooks/fetch-transactions.hook';
import { breakPoints } from '../theme';
import { translate } from '../translate/translate';
import { TEXT } from '../translate/translate-objects';

const MainComponent = styled.main({
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});

const Sidebar = styled.section({
  flex: '1',
});

export const HomePage = () => {
  const { transactions, loading, errors, getTransactions } =
    useFetchTransactions();

  return (
    <>
      <Header />
      {errors && errors?.length > 0 && <p>hello error</p>}
      {loading && <p>{translate(TEXT.general.fetchingData)}</p>}
      {!loading && (
        <>
          <CashFlowTrackings transactions={transactions} />
          <MainComponent>
            <Sidebar>
              <TransactionForm refetch={getTransactions} />
              <DougnutChart transactions={transactions} />
            </Sidebar>
            <Content transactions={transactions} refetch={getTransactions} />
          </MainComponent>
        </>
      )}
    </>
  );
};
