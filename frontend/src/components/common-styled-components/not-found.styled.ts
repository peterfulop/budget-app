import styled from 'styled-components';
import { theme } from '../../theme';

export const NotFound = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  height: '90vh',
  alignItems: 'center',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '32px',
  lineHeight: '44px',
  fontFamily: theme.fonts.alegreya,
  color: theme.colors.darkGray,
  button: {
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '4px',
    fontSize: '24px',
    color: 'white',
    marginTop: '1rem',
    fontFamily: theme.fonts.alegreya,
    background: theme.colors.darkGray,
    ':hover': {
      background: theme.colors.lightGray,
      color: theme.colors.darkGray,
      cursor: 'pointer',
    },
  },
});
