import { FC } from 'react';
import styled from 'styled-components';
import { useSearchAndFilterTransactions } from '../../hooks/search-and-filter.hook';
import { ITransactions, Transaction } from '../../types';
import { CashflowFilter } from '../cash-flow-filter/cash-flow-filter';
import { MostExpensiveTransaction } from '../statisctics/most-expensive-transaction';
import { Top3Expenses } from '../statisctics/top-3-expenses';
import { TransactionList } from '../transaction-list/transaction-list';

const ContentBlock = styled.section({
  flex: '2',
});

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
    <ContentBlock>
      <CashflowFilter
        filterState={filterState}
        setFilterState={setFilterState}
        setSearchKeyword={setSearchKeyword}
      />
      <MostExpensiveTransaction transactions={transactions} />
      <Top3Expenses transactions={transactions} />
      <TransactionList transactions={filteredTransactions} refetch={refetch} />
    </ContentBlock>
  );
};
