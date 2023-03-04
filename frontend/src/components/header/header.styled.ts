import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';

export const HeaderComponent = styled.header({
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '48px',
  lineHeight: '65px',
  padding: '18px 0',
  color: theme.colors.darkGray,
  fontFamily: theme.fonts.alegreya,
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    textAlign: 'center',
    fontSize: '40px',
    padding: '0',
  },
});
