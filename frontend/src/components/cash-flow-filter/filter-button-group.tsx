import { FC, useEffect } from 'react';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { FilterState } from '../../types';
import { ButtonGroup } from './cash-flow-filter.styled';

interface IFilterButtonGroup {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const FilterButtonGroup: FC<IFilterButtonGroup> = ({
  filterState,
  setFilterState,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const state = e.currentTarget.id as FilterState;
    const buttons = document.querySelectorAll('.filter-state-btn');
    buttons.forEach((btn) => {
      if (filterState !== state) {
        btn.classList.remove('active');
      }
    });
    e.currentTarget.classList.add('active');
    setFilterState(state);
  };

  useEffect(() => {
    const ALLButton = document.getElementById(filterState);
    ALLButton?.classList.add('active');
  }, [filterState]);

  return (
    <ButtonGroup>
      <button
        className='filter-state-btn'
        id={FilterState.EXPENSES}
        onClick={handleClick}
      >
        {translate(TEXT.buttons.expenses)}
      </button>
      <button
        className='filter-state-btn'
        id={FilterState.INCOMES}
        onClick={handleClick}
      >
        {translate(TEXT.buttons.incomes)}
      </button>
      <button
        className='filter-state-btn'
        id={FilterState.ALL}
        onClick={handleClick}
      >
        {translate(TEXT.buttons.all)}
      </button>
    </ButtonGroup>
  );
};
