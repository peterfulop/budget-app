import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CashflowFilter } from '../components/cash-flow-filter/cash-flow-filter';
import { CashFlowTrackings } from '../components/cash-flow-tracking/cash-trackings';
import { DougnutChart } from '../components/chart/chart';
import {
  MainComponent,
  SectionLeft,
  SectionRight,
} from '../components/common-styled-components/pages.styled';
import { Header } from '../components/header/header';
import { NotificationBox } from '../components/notification/notification';
import { TransactionForm } from '../components/transaction-form/transaction-form';
import { TransactionList } from '../components/transaction-list/transaction-list';
import { MostExpensiveTransaction } from '../components/transaction-statisctics/most-expensive-transaction';
import { Top3Action } from '../components/transaction-statisctics/top-3-actions';
import { useActions } from '../hooks/use-actions';
import { useNotification } from '../hooks/use-notification.hook';

export const App = () => {
  const dispatch = useDispatch();

  const { getTransactions } = useActions();
  useNotification();

  useEffect(() => {
    getTransactions();
  }, [dispatch]);

  return (
    <>
      <NotificationBox />
      <Header />
      <CashFlowTrackings />
      <MainComponent>
        <SectionLeft>
          <TransactionForm />
          <DougnutChart />
        </SectionLeft>
        <SectionRight>
          <CashflowFilter />
          <MostExpensiveTransaction />
          <Top3Action />
          <TransactionList />
        </SectionRight>
      </MainComponent>
    </>
  );
};
