import styled from 'styled-components';
import { theme } from '../../theme';

export const ErrorMessage = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '4px',
  padding: '13px 24px',
  color: 'white',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: ' 24px',
  margin: '16px 0',
  cursor: 'pointer',
  background: theme.colors.red,
  fontFamily: theme.fonts.alegreyaSans,
});
