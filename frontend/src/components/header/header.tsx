import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { HeaderComponent } from './header.styled';

export const Header = () => {
  return <HeaderComponent>{translate(TEXT.pages.home.name)}</HeaderComponent>;
};
