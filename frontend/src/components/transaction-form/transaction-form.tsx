import { useForm } from 'react-hook-form';
import { translate } from '../../translate/translate';
import { TEXT } from '../../translate/translate-objects';
import { CreateTransactionInput } from '../../types';
import {
  AmountInput,
  AmountInputBox,
  Form,
  FormField,
  Input,
} from './transaction-form.styled';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { transactionActions } from '../../state/slices/transaction-slice';
import { transactionSchema } from './validation/transaction.schema';

export const TransactionForm = () => {
  const { createTransaction } = useActions();
  // const { error, loading } = useTypedSelector(
  //   (state) => state.createTransaction
  // );
  const dispatch = useDispatch();

  const transactions = useTypedSelector((state) => state.transaction);

  const {
    register,
    handleSubmit,
    formState: { errors: formStateErrors },
    getValues,
    reset,
  } = useForm<CreateTransactionInput>({
    resolver: yupResolver(transactionSchema),
  });

  const switchTransactionType = (isIncome: boolean): CreateTransactionInput => {
    const { amount, name } = getValues();
    return {
      amount: amount,
      name: name.trim(),
      income: isIncome,
    };
  };

  const onSubmitIncome = () => {
    const values = switchTransactionType(true);
    dispatch(
      transactionActions.addTransaction({
        transaction: {
          ...values,
        },
      })
    );
    reset();
  };

  const onSubmitExpense = () => {
    const values = switchTransactionType(false);
    // createTransaction(values);
    dispatch(
      transactionActions.addTransaction({
        transaction: {
          ...values,
        },
      })
    );
    reset();
  };

  // if (error) {
  //   return <ErrorMessage>{error}</ErrorMessage>;
  // }

  return (
    <Form>
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
          // disabled={loading}
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
            // disabled={loading}
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
            // disabled={loading}
            style={{
              border: `${
                formStateErrors.amount?.message ? '1px solid red' : ''
              }`,
            }}
          />
          <button
            type='button'
            id='submit-expense'
            // disabled={loading}
            onClick={handleSubmit(onSubmitExpense)}
          >
            {translate(TEXT.transactionForm.buttons.expense)}
          </button>
        </AmountInputBox>
        <span>{formStateErrors.amount?.message}</span>
      </FormField>
    </Form>
  );
};
