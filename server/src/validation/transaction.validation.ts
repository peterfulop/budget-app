import Joi from 'joi';

export const createTransaction = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().integer().min(1).max(2147483647).required(),
  income: Joi.boolean().required(),
});
