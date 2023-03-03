import { FC } from 'react';
import styled from 'styled-components';
import { useCashflowFilter } from '../../hooks/cashflow-filter.hook';
import { useFilterTransaction } from '../../hooks/filter.hook';
import { ITransactions, Transaction } from '../../types';
import { CashflowFilter } from '../cashflow-filter/cashflow-filter';
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
  const { filterState, searchText, setFilterState, setSearchText } =
    useCashflowFilter();

  const { filteredTransactions } = useFilterTransaction({
    filterState,
    transactions,
    searchText,
  });

  return (
    <ContentBlock>
      <CashflowFilter
        filterState={filterState}
        setFilterState={setFilterState}
        setSearchText={setSearchText}
      />
      <MostExpensiveTransaction transactions={transactions} />
      <Top3Expenses transactions={transactions} />
      <TransactionList transactions={filteredTransactions} refetch={refetch} />
    </ContentBlock>
  );
};
