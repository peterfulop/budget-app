import { FC } from 'react';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { FilterState } from '../../types';
import { FilterSection, SearchInput } from './cash-flow-filter.styled';
import { FilterButtonGroup } from './filter-button-group';

interface ICashflowFilter {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const CashflowFilter: FC<ICashflowFilter> = ({
  filterState,
  setFilterState,
  setSearchKeyword,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <FilterSection>
      <FilterButtonGroup
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <SearchInput
        type='text'
        placeholder={translate(TEXT.pages.home.inputs.search.placeholder)}
        onChange={handleInputChange}
      />
    </FilterSection>
  );
};
