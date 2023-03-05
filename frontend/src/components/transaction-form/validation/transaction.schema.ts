import * as yup from 'yup';
import { translate } from '../../../translate/translate';
import { TEXT } from '../../../translate/translate-objects';

export const transactionSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Z \u00C0-\u024F\u1E00-\u1EFF]*$/,
      translate(TEXT.transactionForm.validationErrors.nameOnlyText)
    )
    .required(translate(TEXT.transactionForm.validationErrors.nameRequired)),
  amount: yup
    .number()
    .positive(
      translate(TEXT.transactionForm.validationErrors.amountOnlyPositiveNumber)
    )
    .integer(translate(TEXT.transactionForm.validationErrors.amountOnlyInteger))
    .max(Number.MAX_SAFE_INTEGER, `Max: ${Number.MAX_SAFE_INTEGER}`)
    .required(translate(TEXT.transactionForm.validationErrors.amountRequired))
    .typeError(
      translate(TEXT.transactionForm.validationErrors.amountOnlyPositiveNumber)
    ),
});
