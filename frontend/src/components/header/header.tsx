import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';

const HeaderComponent = styled.header({
  fontFamily: theme.fonts.alegreya,
  color: theme.colors.darkGray,
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '48px',
  lineHeight: '65px',
  padding: '18px 0',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    textAlign: 'center',
    fontSize: '40px',
    padding: '0',
  },
});

export const Header = () => {
  return <HeaderComponent>{translate(TEXT.pages.home.name)}</HeaderComponent>;
};
