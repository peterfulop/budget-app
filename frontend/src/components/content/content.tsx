import { FC } from 'react';
import { useSearchAndFilterTransactions } from '../../hooks/search-and-filter.hook';
import { ITransactions, Transaction } from '../../types';
import { CashflowFilter } from '../cash-flow-filter/cash-flow-filter';
import { MostExpensiveTransaction } from '../statisctics/most-expensive-transaction';
import { Top3Expenses } from '../statisctics/top-3-expenses';
import { TransactionList } from '../transaction-list/transaction-list';

interface IContent extends ITransactions {
  transactions: Transaction[];
}
export const Content: FC<IContent> = ({ transactions, refetch }) => {
  const {
    filteredTransactions,
    filterState,
    setFilterState,
    setSearchKeyword,
  } = useSearchAndFilterTransactions({
    transactions,
  });

  return (
    <div style={{ flex: '2' }}>
      <CashflowFilter
        filterState={filterState}
        setFilterState={setFilterState}
        setSearchKeyword={setSearchKeyword}
      />
      <MostExpensiveTransaction transactions={transactions} />
      <Top3Expenses transactions={transactions} />
      <TransactionList transactions={filteredTransactions} refetch={refetch} />
    </div>
  );
};
