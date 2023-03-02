import { useState } from 'react';
import { FilterState } from '../types';

export const useCashflowFilter = () => {
  const [filterState, setFilterState] = useState<FilterState>(FilterState.ALL);
  const [searchText, setSearchText] = useState<string>('');

  return {
    searchText,
    filterState,
    setFilterState,
    setSearchText,
  };
};
