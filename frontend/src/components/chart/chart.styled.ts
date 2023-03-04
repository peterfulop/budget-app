import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';

export const ChartBox = styled.div({
  h2: {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '32px',
    lineHeight: '44px',
    fontFamily: theme.fonts.alegreya,
    color: theme.colors.darkGray,
  },
  [`@media screen and (max-width: ${breakPoints.md})`]: {
    margin: '50px auto',
    padding: 0,
    width: '300px !important',
    height: '300px !important',
  },
});

export const PercentageBox = styled.div({
  width: '100%',
  height: '40px',
  position: 'absolute',
  top: '50%',
  left: '0',
  marginTop: '-65px',
  textAlign: 'center',
  zIndex: '100',
  h5: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '64px',
    lineHeight: '87px',
    fontFamily: theme.fonts.alegreya,
    '&:after': {
      content: '" %"',
    },
  },
  p: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '20px',
    color: theme.colors.darkGray,
    fontFamily: theme.fonts.alegreyaSans,
  },
});
