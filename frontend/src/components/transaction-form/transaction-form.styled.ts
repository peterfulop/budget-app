import styled from 'styled-components';
import { theme } from '../../theme';

export const Form = styled.form({
  margin: '30px 0',
  h2: {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '32px',
    lineHeight: '44px',
    fontFamily: theme.fonts.alegreya,
    color: theme.colors.darkGray,
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '5px',
    fontFamily: theme.fonts.alegreya,
    color: theme.colors.darkGray,
  },
  'input:focus': {
    outline: 'none',
  },
});

export const FormField = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '18px 0',
  width: '100%',
  span: {
    marginTop: '5px',
    color: theme.colors.red,
    fontFamily: theme.fonts.alegreya,
  },
});

export const Input = styled.input({
  borderRadius: '4px',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',
  padding: '12px 15px',
  color: theme.colors.darkGray,
  fontFamily: theme.fonts.alegreyaSans,
  border: `1px solid ${theme.colors.lightGray}`,
});

export const AmountInputBox = styled.div({
  display: 'flex',
  width: '100%',
  button: {
    border: 'none',
    background: 'none',
    color: 'white',
    fontDtyle: 'normal',
    fontWeight: 900,
    fontSize: '18px',
    lineHeight: '21px',
    textTransform: 'uppercase',
    padding: '0 16px',
    fontFamily: theme.fonts.alegreyaSans,
    width: '100px',
  },
  '#submit-income': {
    background: theme.colors.green,
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },
  '#submit-expense': {
    background: theme.colors.red,
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
  },
});

export const AmountInput = styled(Input)({
  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: 0,
  width: 'calc(100% - 200px)',
});
