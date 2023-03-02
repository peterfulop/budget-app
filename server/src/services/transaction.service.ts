import {
  CreateTransactionInput,
  DeleteTransactionInput,
  GetTransactionInput,
} from '../types';

import { PrismaClient, Transaction } from '@prisma/client';
const prisma = new PrismaClient();

export interface TransactionService {
  createTransaction: (input: CreateTransactionInput) => Promise<Transaction>;
  getTransactions: () => Promise<Transaction[]>;
  getTransaction: (input: GetTransactionInput) => Promise<Transaction | null>;
  deleteTransaction: (input: DeleteTransactionInput) => Promise<Transaction>;
}

export const transactionServiceFactory = (): TransactionService => {
  const createTransaction: TransactionService['createTransaction'] = async ({
    name,
    amount,
    income,
  }) => {
    try {
      return await prisma.transaction.create({
        data: {
          name,
          amount,
          income,
        },
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const getTransactions: TransactionService['getTransactions'] = async () => {
    try {
      return await prisma.transaction.findMany();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const getTransaction: TransactionService['getTransaction'] = async ({
    id,
  }) => {
    try {
      return await prisma.transaction.findUnique({
        where: {
          id,
        },
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const deleteTransaction: TransactionService['deleteTransaction'] = async ({
    id,
  }) => {
    try {
      return await prisma.transaction.delete({
        where: {
          id,
        },
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  return {
    createTransaction,
    getTransaction,
    getTransactions,
    deleteTransaction,
  };
};
