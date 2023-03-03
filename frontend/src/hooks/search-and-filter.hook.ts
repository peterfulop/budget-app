import { useEffect, useState } from 'react';
import { FilterState, Transaction } from '../types';

type SearchAndFilterTransactionProps = {
  transactions: Transaction[];
};

export const useSearchAndFilterTransactions = (
  props: SearchAndFilterTransactionProps
) => {
  const { transactions } = props;

  const [filterState, setFilterState] = useState<FilterState>(FilterState.ALL);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);

  useEffect(() => {
    switchFilterState();
  }, [transactions, searchKeyword, filterState]);

  const switchFilterState = () => {
    let filtered: Transaction[] = [];
    switch (filterState) {
      case FilterState.EXPENSES:
        filtered = transactions.filter((trans) => !trans.income);
        break;
      case FilterState.INCOMES:
        filtered = transactions.filter((trans) => trans.income);
        break;
      case FilterState.ALL:
        filtered = [...transactions];
        break;
    }
    const searchResult = searchByUserInput(filtered);
    const preFiltered = searchResult ? searchResult : filtered;
    setFilteredTransactions(preFiltered);
  };

  const searchByUserInput = (transactions: Transaction[]) => {
    if (searchKeyword) {
      const searchByName = transactions.filter((trans) => {
        return trans.name.toLowerCase().includes(searchKeyword.toLowerCase());
      });
      const searchByAmount = transactions.filter((trans) => {
        return trans.amount
          .toString()
          .toLowerCase()
          .includes(searchKeyword.toLowerCase());
      });
      return [...searchByName, ...searchByAmount];
    }
  };

  return {
    filterState,
    filteredTransactions,
    setFilterState,
    setSearchKeyword,
  };
};
