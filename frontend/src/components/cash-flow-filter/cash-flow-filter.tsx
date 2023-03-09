import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { transactionActions } from '../../state/slices/transaction-slice';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { FilterState } from '../../types/enums';
import { FilterSection, SearchInput } from './cash-flow-filter.styled';
import { FilterButtonGroup } from './filter-button-group';

export const CashflowFilter = () => {
  const dispatch = useDispatch();
  const { searchKeyword } = useTypedSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(transactionActions.filterAndSearchTransactions());
  }, [searchKeyword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    if (input.value) {
      input.classList.add('active');
    } else {
      input.classList.remove('active');
    }
    dispatch(transactionActions.setSearchKeyword(input.value as FilterState));
  };

  return (
    <FilterSection>
      <FilterButtonGroup />
      <SearchInput
        type='text'
        placeholder={translate(TEXT.pages.home.inputs.search.placeholder)}
        onChange={(e) => handleInputChange(e)}
      />
    </FilterSection>
  );
};
