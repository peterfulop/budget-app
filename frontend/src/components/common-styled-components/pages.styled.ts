import styled from 'styled-components';
import { breakPoints } from '../../theme';

export const MainApp = styled.div({
  margin: '0 auto',
  maxWidth: '1240px',
  padding: '0 20px',
});

export const MainComponent = styled.main({
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  flexWrap: 'wrap',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});

export const SectionLeft = styled.section({
  width: 'calc(1140px / 3)',
  [`@media screen and (max-width: ${breakPoints.lg})`]: {
    flex: '1',
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    width: '100%',
  },
});
export const SectionRight = styled.section({
  flex: '2',
});
