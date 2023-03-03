import { FC } from 'react';
import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { FilterState } from '../../types';

const ButtonGroup = styled.div({
  flex: '1',
  display: 'flex',
  justifyContent: 'space-between',
  button: {
    flex: '1',
    border: 'none',
    cursor: 'pointer',
    padding: '5.5px 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '18px',
    lineHeight: '21px',
    textAlign: 'center',
    letterSpacing: '2px',
    fontFamily: theme.fonts.alegreyaSans,
    borderTop: `1px solid ${theme.colors.darkGray}`,
    borderBottom: `1px solid ${theme.colors.darkGray}`,
    ':first-of-type': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      border: `1px solid ${theme.colors.darkGray}`,
    },
    ':last-of-type': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      border: `1px solid ${theme.colors.darkGray}`,
    },
  },
  '.active': {
    background: theme.colors.darkGray,
    color: 'white',
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    width: '100%',
  },
});

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
        className='filter-state-btn active'
        id={FilterState.ALL}
        onClick={handleClick}
      >
        {translate(TEXT.buttons.all)}
      </button>
    </ButtonGroup>
  );
};
