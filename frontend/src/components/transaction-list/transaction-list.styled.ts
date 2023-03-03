import styled from 'styled-components';
import { theme } from '../../theme';

export const List = styled.div({
  borderRadius: '4px',
  border: `1px solid ${theme.colors.lightGray}`,
  margin: '16px 0',
  maxHeight: '495px',
  overflow: 'auto',
});

export const ListItem = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px 24px',
  background: 'white',
  borderBottom: `1px solid ${theme.colors.lightGray}`,
  p: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
    fontFamily: theme.fonts.alegreyaSans,
  },
  ':last-of-type': {
    borderBottom: 'none',
  },
});

export const ListItemData = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginRight: '20px',
});

export const AmountBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '20px',
  padding: '5px 9px',
  color: 'white',
  fontStyle: ' normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '12px',
  background: theme.colors.red,
  fontFamily: theme.fonts.alegreyaSans,
});

export const DeleteBtn = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '7px',
  borderRadius: '50%',
  background: theme.colors.darkGray,
  height: '22px',
  cursor: 'pointer',
});

export const DeleteConfirmationBox = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  button: {
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    textAlign: 'center',
    borderRadius: '20px',
    padding: '12px 10px',
    color: 'white',
    fontStyle: ' normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '12px',
    fontFamily: theme.fonts.alegreyaSans,
  },
  '#withdraw-delete': {
    background: theme.colors.darkGray,
  },
  '#confirm-delete': {
    background: theme.colors.red,
  },
});
