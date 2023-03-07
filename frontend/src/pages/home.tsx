import { useEffect } from 'react';
import { CashflowFilter } from '../components/cash-flow-filter/cash-flow-filter';
import { CashFlowTrackings } from '../components/cash-flow-tracking/cash-trackings';
import { DougnutChart } from '../components/chart/chart';
import { ErrorMessage } from '../components/common-styled-components/error-message.styled';
import {
  MainComponent,
  Sidebar,
} from '../components/common-styled-components/pages.styled';
import { Header } from '../components/header/header';
import { TransactionForm } from '../components/transaction-form/transaction-form';
import { TransactionList } from '../components/transaction-list/transaction-list';
import { MostExpensiveTransaction } from '../components/transaction-statisctics/most-expensive-transaction';
import { Top3Action } from '../components/transaction-statisctics/top-3-actions';
import { useSearchAndFilterTransactions } from '../hooks/search-and-filter.hook';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { translate } from '../translate/translate';
import { TEXT } from '../translate/translate-objects';

export const HomePage = () => {
  const { getTransactions } = useActions();
  const {
    data: transactions,
    error,
    loading,
  } = useTypedSelector((state) => state.getTransactions);

  useEffect(() => {
    getTransactions();
  }, []);

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
      <Header />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <p>{translate(TEXT.general.fetchingData)}</p>}
      {!loading && !error && transactions && (
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
      )}
    </>
  );
};
