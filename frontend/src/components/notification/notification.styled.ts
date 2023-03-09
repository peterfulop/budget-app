import styled from 'styled-components';
import { theme } from '../../theme';

export const NotificationSection = styled.section({
  position: 'absolute',
  padding: '1rem',
  top: 0,
  display: 'flex',
  gap: '5px',
  right: 0,
  margin: '10px',
  borderRadius: '5px',
  color: 'white',
  fontFamily: theme.fonts.alegreyaSans,
  opacity: 1,
  height: 'auto',
  cursor: 'pointer',
  h4: {
    textTransform: 'uppercase',
  },
  '&.inactive': {
    opacity: 0,
    overflow: 'hidden',
    '-webkit-transition': '(opacity 3s ease-in)',
    transition: 'opacity 3s ease-in',
  },
});
