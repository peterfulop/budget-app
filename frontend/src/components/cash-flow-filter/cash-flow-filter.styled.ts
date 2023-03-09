import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';

export const FilterSection = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '36px 0 27px 0',
  gap: '30px',
  flexWrap: 'wrap',
  '.active': {
    border: `1px solid ${theme.colors.darkGray}`,
  },
});

export const SearchInput = styled.input({
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
  ':focus': {
    outline: 'none',
  },
});

export const ButtonGroup = styled.div({
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
