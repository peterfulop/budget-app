import { RequestHandler } from 'express';
import { transactionServiceFactory } from '../services/transaction.service';
import {
  CreateTransactionInput,
  DeleteTransactionInput,
  GetTransactionInput,
} from '../types';

const transactionService = transactionServiceFactory();

const create: RequestHandler = async (req, res, _next) => {
  try {
    const { name, amount, income } = req.body as CreateTransactionInput;
    const transaction = await transactionService.createTransaction({
      name,
      amount,
      income,
    });
    return res.status(201).json({ data: transaction });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getOne: RequestHandler = async (req, res, _next) => {
  try {
    const { id } = req.params as GetTransactionInput;
    const transaction = await transactionService.getTransaction({
      id,
    });
    return transaction
      ? res.status(200).json({ data: transaction })
      : res.status(404).json({ message: 'Not found' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAll: RequestHandler = async (_req, res, _next) => {
  try {
    const transactions = await transactionService.getTransactions();
    return transactions
      ? res.status(200).json({ data: transactions })
      : res.status(404).json({ message: 'Not found' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteOne: RequestHandler = async (req, res, _next) => {
  try {
    const { id } = req.params as DeleteTransactionInput;
    const transaction = await transactionService.deleteTransaction({
      id,
    });
    return transaction
      ? res.status(200).json({ success: true })
      : res.status(404).json({ message: 'Not found' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default {
  create,
  getOne,
  getAll,
  deleteOne,
};
