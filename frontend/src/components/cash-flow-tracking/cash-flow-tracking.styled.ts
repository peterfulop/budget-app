import styled from 'styled-components';
import { breakPoints, theme } from '../../theme';

export const TrackingItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '22px 0',
  flex: '1',
  borderRadius: '8px',
  color: 'white',
  p: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '20px',
    fontFamily: theme.fonts.alegreya,
  },
  h4: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '20px',
    fontFamily: theme.fonts.alegreyaSans,
  },
});

export const TrackingContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  padding: '40px 0',
  borderTop: `1px solid ${theme.colors.lightGray}`,
  borderBottom: `1px solid ${theme.colors.lightGray}`,
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'column',
    gap: '20px',
    padding: '20px 0',
  },
});
