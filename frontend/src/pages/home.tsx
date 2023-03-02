import styled from 'styled-components';
import { CashTrackings } from '../components/cash-tracking/cash-trackings';
import { theme } from '../theme';
import { translate } from '../translate/translate';
import { TEXT } from '../translate/translate-objects';

const Header = styled.header({
  fontFamily: theme.fonts.alegreya,
  color: theme.colors.darkGray,
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '48px',
  lineHeight: '65px',
  padding: '18px 0',
  borderBottom: `1px solid ${theme.colors.lightGray}`,
});

const Main = styled.main({
  display: 'flex',
});

export const HomePage = () => {
  return (
    <div>
      <Header>{translate(TEXT.pages.home.name)}</Header>
      <CashTrackings transactions={[]} />
      <Main>
        <section style={{ flex: '1' }}> hello left</section>
        <section style={{ flex: '2' }}>content</section>
      </Main>
    </div>
  );
};
