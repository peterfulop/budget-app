import * as yup from 'yup';
import { translate } from '../../../translate/translate';
import { TEXT } from '../../../translate/translate-objects';
import { CreateTransactionInput } from '../../../types';

export const transactionSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[A-zÀ-ú ]*$/,
      translate(TEXT.transactionForm.validationErrors.nameOnlyText)
    )
    .required(translate(TEXT.transactionForm.validationErrors.nameRequired)),
  amount: yup
    .number()
    .positive(
      translate(TEXT.transactionForm.validationErrors.amountOnlyPositiveNumber)
    )
    .integer(translate(TEXT.transactionForm.validationErrors.amountOnlyInteger))
    .required(translate(TEXT.transactionForm.validationErrors.amountRequired))
    .typeError(
      translate(TEXT.transactionForm.validationErrors.amountOnlyPositiveNumber)
    ),
  income: yup
    .boolean()
    .required(translate(TEXT.transactionForm.validationErrors.incomeRequired)),
});

type ValidateFormPayload = {
  data?: CreateTransactionInput;
  error?: string[];
};

export const yupValidateForm = async (
  input: Record<string, unknown>
): Promise<ValidateFormPayload> => {
  try {
    const res = await transactionSchema.validate(input);
    if (res) {
      return {
        data: {
          name: res.name,
          amount: res.amount,
          income: res.income,
        },
      };
    } else throw new Error('Unknown Error');
  } catch (err: any) {
    return { error: [...err.errors] };
  }
};
