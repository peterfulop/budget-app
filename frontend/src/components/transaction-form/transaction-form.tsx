import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateTransaction } from '../../hooks/create-transaction.hook';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { CreateTransactionInput, ITransactions } from '../../types';
import {
  AmountInput,
  AmountInputBox,
  Form,
  FormField,
  Input,
} from './transaction-form.styled';

import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '../common-styled-components/error-message.styled';
import { transactionSchema } from './validation/transaction.schema';

export const TransactionForm: FC<ITransactions> = ({ refetch }) => {
  const { loading, errors, data, createTransaction, setErrors } =
    useCreateTransaction();

  const {
    register,
    handleSubmit,
    formState: { errors: formStateErrors },
    getValues,
  } = useForm<CreateTransactionInput>({
    resolver: yupResolver(transactionSchema),
  });

  useEffect(() => {
    if (!loading && data) {
      refetch();
    }
  }, [data]);

  const switchTransactionType = (isIncome: boolean): CreateTransactionInput => {
    const values = getValues();
    return {
      ...values,
      income: isIncome,
    };
  };

  const onSubmitIncome = async () => {
    const values = switchTransactionType(true);
    await createTransaction(values);
  };

  const onSubmitExpense = async () => {
    const values = switchTransactionType(false);
    await createTransaction(values);
  };

  return (
    <Form onChange={() => setErrors(null)}>
      <h2>{translate(TEXT.transactionForm.title)}</h2>
      <FormField>
        <label htmlFor='input-name'>
          {translate(TEXT.transactionForm.inputs.name.label)}
        </label>
        <Input
          id='input-name'
          type='text'
          tabIndex={1}
          placeholder={translate(TEXT.transactionForm.inputs.name.placeholder)}
          disabled={loading}
          style={{
            border: `${formStateErrors.name?.message ? '1px solid red' : ''}`,
          }}
          {...register('name')}
        />
        <span>{formStateErrors.name?.message}</span>
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
            onClick={handleSubmit(onSubmitIncome)}
          >
            {translate(TEXT.transactionForm.buttons.income)}
          </button>
          <AmountInput
            id='input-amount'
            type='number'
            tabIndex={2}
            placeholder={translate(
              TEXT.transactionForm.inputs.amount.placeholder
            )}
            {...register('amount', { valueAsNumber: true })}
            disabled={loading}
            style={{
              border: `${
                formStateErrors.amount?.message ? '1px solid red' : ''
              }`,
            }}
          />
          <button
            type='button'
            id='submit-expense'
            disabled={loading}
            onClick={handleSubmit(onSubmitExpense)}
          >
            {translate(TEXT.transactionForm.buttons.expense)}
          </button>
        </AmountInputBox>
        <span>{formStateErrors.amount?.message}</span>
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
