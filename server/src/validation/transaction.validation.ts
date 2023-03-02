import Joi from 'joi';

export const createTransaction = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().integer().min(1).required(),
  income: Joi.boolean().required(),
});
