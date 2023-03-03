import { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { FilterState } from '../../types';
import { FilterButtonGroup } from './filter-button-group';

const FilterSection = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '36px 0 27px 0',
  gap: '30px',
  flexWrap: 'wrap',
});

const SearchInput = styled.input({
  flex: '1',
  borderRadius: '4px',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  padding: '6px 15px',
  color: theme.colors.darkGray,
  fontFamily: theme.fonts.alegreyaSans,
  border: `1px solid ${theme.colors.lightGray}`,
});

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
