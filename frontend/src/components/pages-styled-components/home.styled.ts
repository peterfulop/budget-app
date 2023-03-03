import styled from 'styled-components';
import { breakPoints } from '../../theme';

export const MainComponent = styled.main({
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  flexWrap: 'wrap',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
  },
});

export const Sidebar = styled.section({
  width: 'calc(1140px / 3)',
  [`@media screen and (max-width: ${breakPoints.lg})`]: {
    flex: '1',
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    width: '100%',
  },
});
