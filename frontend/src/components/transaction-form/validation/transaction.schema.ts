import * as yup from 'yup';
import { translate } from '../../../translate/translate';
import { TEXT } from '../../../translate/translate-objects';

export const transactionSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required(translate(TEXT.transactionForm.validationErrors.nameRequired))
    .test(
      'onlyNumbers',
      translate(TEXT.transactionForm.validationErrors.nameOnlyText),
      (value) => {
        return isNaN(Number(value));
      }
    ),
  amount: yup
    .number()
    .positive(
      translate(TEXT.transactionForm.validationErrors.amountOnlyPositiveNumber)
    )
    .integer(translate(TEXT.transactionForm.validationErrors.amountOnlyInteger))
    .max(2147483647, `Max: ${'2.147.483.647'}`)
    .required(translate(TEXT.transactionForm.validationErrors.amountRequired))
    .typeError(
      translate(TEXT.transactionForm.validationErrors.amountOnlyPositiveNumber)
    ),
});
