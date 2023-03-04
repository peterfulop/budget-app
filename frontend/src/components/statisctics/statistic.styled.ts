import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';

export const StatContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '4px',
  padding: '13px 24px',
  color: 'white',
  fontStyle: 'normal',
  fontWeight: '900',
  fontSize: '18px',
  lineHeight: ' 24px',
  small: {
    fontWeight: '300',
  },
  margin: '16px 0',
  background: theme.colors.darkGray,
  fontFamily: theme.fonts.alegreyaSans,
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});

export const MostExpensiveContainer = styled(StatContainer)({
  span: {
    '&:before': {
      content: '": "',
    },
  },
});

export const TopListContainer = styled(StatContainer)({
  flexDirection: 'column',
  '#filter-state': {
    textTransform: 'lowercase',
  },
});

export const Top3List = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '.5rem',
  '.amount': {
    '&:before': {
      content: '":\t"',
    },
  },
  '.index': {
    '&:after': {
      content: '".\t"',
    },
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});
