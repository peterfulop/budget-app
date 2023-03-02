import styled from 'styled-components';
import { CashTrackings } from '../components/cash-tracking-box/cash-trackings';
import { DougnutChart } from '../components/chart/chart';
import { Header } from '../components/header/header';
import { Content } from '../components/main/main';
import { useFetchTransactions } from '../hooks/fetch-transactions.hook';
import { breakPoints } from '../theme';

const MainComponent = styled.main({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});

const Sidebar = styled.section({
  flex: '1',
});

export const HomePage = () => {
  const { data, loading, getTransactions } = useFetchTransactions();

  return (
    <>
      <Header />
      {!loading && (
        <>
          <CashTrackings transactions={data} />
          <MainComponent>
            <Sidebar>
              <DougnutChart transactions={data} />
            </Sidebar>
            <Content transactions={data} refetch={getTransactions} />
          </MainComponent>
        </>
      )}
    </>
  );
};
