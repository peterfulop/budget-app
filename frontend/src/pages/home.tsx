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
import { Notification } from '../components/notification/notification';
import { TransactionForm } from '../components/transaction-form/transaction-form';
import { TransactionList } from '../components/transaction-list/transaction-list';
import { MostExpensiveTransaction } from '../components/transaction-statisctics/most-expensive-transaction';
import { Top3Action } from '../components/transaction-statisctics/top-3-actions';
import { useSearchAndFilterTransactions } from '../hooks/search-and-filter.hook';
import { useTransactionSubscriptions } from '../hooks/use-transaction-subscriptions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { fetchTransactionsData } from '../state/action-creators';

export const HomePage = () => {
  const dispatch = useDispatch();
  const notification = useTypedSelector((state) => state.ui.notification);
  const { transactions } = useTypedSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchTransactionsData() as any);
  }, [dispatch]);

  useTransactionSubscriptions();

  const {
    filteredTransactions,
    filterState,
    setFilterState,
    setSearchKeyword,
  } = useSearchAndFilterTransactions({
    transactions,
  });

  return (
    <>
      {notification && <Notification {...notification} />}
      <Header />
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
      {/* {loading && <p>{translate(TEXT.general.fetchingData)}</p>} */}
      {/* {!loading && !error && transactions && ( */}
      <>
        <CashFlowTrackings transactions={transactions} />
        <MainComponent>
          <Sidebar>
            <TransactionForm />
            <DougnutChart transactions={transactions} />
          </Sidebar>
          <div style={{ flex: '2' }}>
            <CashflowFilter
              filterState={filterState}
              setFilterState={setFilterState}
              setSearchKeyword={setSearchKeyword}
            />
            <MostExpensiveTransaction transactions={transactions} />
            <Top3Action
              transactions={filteredTransactions}
              filterState={filterState}
            />
            <TransactionList transactions={filteredTransactions} />
          </div>
        </MainComponent>
      </>
      {/* )} */}
    </>
  );
};
