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
  flexWrap: 'wrap',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});
const Sidebar = styled.section({
  width: 'calc(1140px / 3)',
  [`@media screen and (max-width: ${breakPoints.lg})`]: {
    flex: '1',
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    width: '100%',
  },
});

export const HomePage = () => {
  const { transactions, loading, errors, getTransactions } =
    useFetchTransactions();
  return (
    <>
      <Header />
      {errors && errors?.length > 0 && <p>{errors[0]}</p>}
      {loading && <p>{translate(TEXT.general.fetchingData)}</p>}
      {!loading && !errors && transactions && (
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
