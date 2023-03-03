import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useTransactionActions } from '../../hooks/transaction-actions.hook';
import { useForm } from '../../hooks/use-form.hook';
import { theme } from '../../theme';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { CreateTransactionInput, ITransactions } from '../../types';

const Form = styled.form({
  margin: '30px 0',
  h2: {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '32px',
    lineHeight: '44px',
    fontFamily: theme.fonts.alegreya,
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
});

const FormField = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '18px 0',
  width: '100%',
});

const Input = styled.input({
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

const AmountInputBox = styled.div({
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

const AmountInput = styled(Input)({
  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: 0,
  width: 'calc(100% - 200px)',
});

const ErrorMessage = styled.div({
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
  background: theme.colors.red,
  fontFamily: theme.fonts.alegreyaSans,
});

interface ITransactionForm extends ITransactions {}

export const TransactionForm: FC<ITransactionForm> = ({ refetch }) => {
  const { loading, errors, data, createTransaction, setAlerts } =
    useTransactionActions();

  const { onChange, values } = useForm({
    initialState: { name: '', amount: '' },
  });

  const handleSubmit = async (input: { income: boolean }) => {
    const newTransaction: CreateTransactionInput = {
      name: values.name,
      amount: values.amount,
      income: input.income,
    };
    await createTransaction(newTransaction);
  };

  useEffect(() => {
    if (!loading && data) {
      refetch();
    }
  }, [data]);

  return (
    <Form
      onChange={() => {
        setAlerts(null);
      }}
    >
      <h2>{translate(TEXT.cashFlowForm.title)}</h2>
      <FormField>
        <label htmlFor='input-name'>
          {translate(TEXT.cashFlowForm.inputs.name.label)}
        </label>
        <Input
          id='input-name'
          name='name'
          type='text'
          placeholder={translate(TEXT.cashFlowForm.inputs.name.placeholder)}
          onChange={onChange}
          disabled={loading}
        />
      </FormField>
      <FormField>
        <label htmlFor='input-amount'>
          {translate(TEXT.cashFlowForm.inputs.amount.label)}
        </label>
        <AmountInputBox>
          <button
            type='button'
            id='submit-income'
            disabled={loading}
            onClick={async (e) => {
              e.preventDefault();
              await handleSubmit({ income: true });
            }}
          >
            {translate(TEXT.cashFlowForm.buttons.income)}
          </button>
          <AmountInput
            id='input-amount'
            name='amount'
            type='number'
            placeholder={translate(TEXT.cashFlowForm.inputs.amount.placeholder)}
            onChange={onChange}
            disabled={loading}
          />
          <button
            type='button'
            id='submit-expense'
            disabled={loading}
            onClick={async (e) => {
              e.preventDefault();
              await handleSubmit({ income: false });
            }}
          >
            {translate(TEXT.cashFlowForm.buttons.expense)}
          </button>
        </AmountInputBox>
      </FormField>
      <FormField>
        {errors && errors?.length > 0 && (
          <div>
            {errors.map((error, index) => {
              return <ErrorMessage key={index}>{error}</ErrorMessage>;
            })}
          </div>
        )}
      </FormField>
    </Form>
  );
};
