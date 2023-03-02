import { useEffect, useState } from 'react';
import { FilterState, Transaction } from '../types';

interface IUseFilterTransactionProps {
  filterState: FilterState;
  transactions: Transaction[];
  searchText?: string;
}

export const useFilterTransaction = (props: IUseFilterTransactionProps) => {
  const { filterState, transactions, searchText } = props;

  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);

  useEffect(() => {
    switchFilterState();
  }, [searchText, filterState]);

  const switchFilterState = () => {
    const searchResult = searchByUserInput();
    const preFiltered = searchResult ? searchResult : transactions;

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
    if (searchText) {
      const searchByName = transactions.filter((trans) => {
        return trans.name.toLowerCase().includes(searchText.toLowerCase());
      });
      const searchByAmount = transactions.filter((trans) => {
        return trans.amount
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      return [...searchByName, ...searchByAmount];
    }
  };

  return {
    filteredTransactions,
  };
};
