import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { transactionActions } from '../../state/slices/transaction-slice';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { FilterState } from '../../types';
import { ButtonGroup } from './cash-flow-filter.styled';

export const FilterButtonGroup: FC = () => {
  const dispatch = useDispatch();
  const { filterState } = useTypedSelector((state) => state.transaction);

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
    dispatch(transactionActions.setFilterState(state));
  };

  useEffect(() => {
    dispatch(transactionActions.filterAndSearchTransactions());
  }, [filterState]);

  useEffect(() => {
    const button = document.getElementById(filterState);
    button?.classList.add('active');
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
