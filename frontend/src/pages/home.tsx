import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CashflowFilter } from '../components/cash-flow-filter/cash-flow-filter';
import { CashFlowTrackings } from '../components/cash-flow-tracking/cash-trackings';
import { DougnutChart } from '../components/chart/chart';
import {
  MainComponent,
  Sidebar,
} from '../components/common-styled-components/pages.styled';
import { Header } from '../components/header/header';
import { TransactionForm } from '../components/transaction-form/transaction-form';
import { TransactionList } from '../components/transaction-list/transaction-list';
import { MostExpensiveTransaction } from '../components/transaction-statisctics/most-expensive-transaction';
import { getTransactions } from '../state/action-creators';

export const HomePage = () => {
  const dispatch = useDispatch();
  // const { transactions } = useTypedSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(getTransactions() as any);
  }, [dispatch]);

  // const {
  //   filteredTransactions,
  //   filterState,
  //   setFilterState,
  //   setSearchKeyword,
  // } = useSearchAndFilterTransactions(transactions);

  return (
    <>
      <Header />
      <CashFlowTrackings />
      <MainComponent>
        <Sidebar>
          <TransactionForm />
          <DougnutChart />
        </Sidebar>
        <div style={{ flex: '2' }}>
          <CashflowFilter
          // filterState={filterState}
          // setFilterState={setFilterState}
          // setSearchKeyword={setSearchKeyword}
          />
          <MostExpensiveTransaction />
          {/* <Top3Action
            transactions={filteredTransactions}
            filterState={filterState}
          /> */}
          <TransactionList />
        </div>
      </MainComponent>
    </>
  );
};
