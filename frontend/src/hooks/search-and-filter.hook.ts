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
  }, [searchKeyword, filterState]);

  const switchFilterState = () => {
    const searchResult = searchByUserInput();
    const preFiltered = searchResult ? searchResult : transactions;

    if (preFiltered)
      switch (filterState) {
        case FilterState.EXPENSES:
          {
            const filtered = preFiltered.filter((trans) => !trans.income);
            setFilteredTransactions(filtered);
          }
          break;
        case FilterState.INCOMES:
          {
            const filtered = preFiltered.filter((trans) => trans.income);
            setFilteredTransactions(filtered);
          }
          break;
        case FilterState.ALL:
          setFilteredTransactions(preFiltered);
          break;
      }
  };

  const searchByUserInput = () => {
    if (transactions && searchKeyword) {
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
