import { CashflowFilter } from '../components/cash-flow-filter/cash-flow-filter';
import { CashFlowTrackings } from '../components/cash-flow-tracking/cash-trackings';
import { DougnutChart } from '../components/chart/chart';
import { Header } from '../components/header/header';
import {
  MainComponent,
  Sidebar,
} from '../components/pages-styled-components/home.styled';
import { MostExpensiveTransaction } from '../components/statisctics/most-expensive-transaction';
import { Top3Action } from '../components/statisctics/top-3-actions';
import { TransactionForm } from '../components/transaction-form/transaction-form';
import { TransactionList } from '../components/transaction-list/transaction-list';
import { useGetTransactions } from '../hooks/get-transactions.hook';
import { useSearchAndFilterTransactions } from '../hooks/search-and-filter.hook';
import { translate } from '../translate/translate';
import { TEXT } from '../translate/translate-objects';

export const HomePage = () => {
  const { transactions, loading, errors, getTransactions } =
    useGetTransactions();

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
      {errors && errors?.length > 0 && (
        <p>{translate(TEXT.general.serverError)}</p>
      )}
      {loading && <p>{translate(TEXT.general.fetchingData)}</p>}
      {!loading && transactions && (
        <>
          <CashFlowTrackings transactions={transactions} />
          <MainComponent>
            <Sidebar>
              <TransactionForm refetch={getTransactions} />
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
              <TransactionList
                transactions={filteredTransactions}
                refetch={getTransactions}
              />
            </div>
          </MainComponent>
        </>
      )}
    </>
  );
};
