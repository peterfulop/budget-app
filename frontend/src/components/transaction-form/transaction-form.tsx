import { FC, useEffect } from 'react';
import { useTransactionActions } from '../../hooks/transaction-actions.hook';
import { useForm } from '../../hooks/use-form.hook';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { CreateTransactionInput, ITransactions } from '../../types';
import {
  AmountInput,
  AmountInputBox,
  ErrorMessage,
  Form,
  FormField,
  Input,
} from './transaction-form.styled';
import { yupValidateForm } from './validation/transaction.schema';

interface ITransactionForm extends ITransactions {}

export const TransactionForm: FC<ITransactionForm> = ({ refetch }) => {
  const { loading, errors, data, createTransaction, setErrors } =
    useTransactionActions();

  const { onChange, values } = useForm({
    initialState: { name: '', amount: '' },
  });

  const validateForm = async (
    input: CreateTransactionInput
  ): Promise<CreateTransactionInput | void> => {
    setErrors(null);
    const { name, amount, income } = input;
    if (!name || !amount || income === undefined) {
      return setErrors(['All fields are required!']);
    }
    const { data, error } = await yupValidateForm(input);
    if (error) {
      return setErrors([...error]);
    }
    if (data) {
      return data;
    }
  };

  const handleSubmit = async (input: { income: boolean }) => {
    const newTransaction: CreateTransactionInput = {
      name: values.name,
      amount: values.amount,
      income: input.income,
    };
    const validData = await validateForm(newTransaction);
    if (validData) {
      await createTransaction(validData);
    }
  };

  useEffect(() => {
    if (!loading && data) {
      refetch();
    }
  }, [data]);

  return (
    <Form
      onChange={() => {
        setErrors(null);
      }}
    >
      <h2>{translate(TEXT.transactionForm.title)}</h2>
      <FormField>
        <label htmlFor='input-name'>
          {translate(TEXT.transactionForm.inputs.name.label)}
        </label>
        <Input
          id='input-name'
          name='name'
          type='text'
          placeholder={translate(TEXT.transactionForm.inputs.name.placeholder)}
          onChange={onChange}
          disabled={loading}
          style={{ border: `${errors ? '1px solid red' : ''}` }}
        />
      </FormField>
      <FormField>
        <label htmlFor='input-amount'>
          {translate(TEXT.transactionForm.inputs.amount.label)}
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
            {translate(TEXT.transactionForm.buttons.income)}
          </button>
          <AmountInput
            id='input-amount'
            name='amount'
            type='number'
            placeholder={translate(
              TEXT.transactionForm.inputs.amount.placeholder
            )}
            onChange={onChange}
            disabled={loading}
            style={{ border: `${errors ? '1px solid red' : ''}` }}
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
            {translate(TEXT.transactionForm.buttons.expense)}
          </button>
        </AmountInputBox>
      </FormField>
      {errors && errors?.length > 0 && (
        <>
          {errors.map((error, index) => {
            return (
              <ErrorMessage
                key={index}
                onClick={(e) => {
                  setErrors(null);
                  e.currentTarget.style.display = 'none';
                }}
              >
                {error}
              </ErrorMessage>
            );
          })}
        </>
      )}
    </Form>
  );
};
