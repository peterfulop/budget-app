import express from 'express';
import controller from '../controllers/transaction.controller';
import validationMiddleware from '../middleware/validation.middleware';
import { TransactionRoutes } from '../types';
import { createTransaction } from '../validation/transaction.validation';

const router = express.Router();

router.post(
  TransactionRoutes.CREATE,
  validationMiddleware(createTransaction),
  controller.create
);
router.get(TransactionRoutes.GET_ALL, controller.getAll);
router.get(TransactionRoutes.GET_ONE, controller.getOne);
router.delete(TransactionRoutes.DELETE, controller.deleteOne);

export default router;
