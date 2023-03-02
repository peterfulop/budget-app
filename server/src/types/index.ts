export enum TransactionRoutes {
  BASE = 'transactions',
  CREATE = '/create',
  GET_ALL = '/',
  GET_ONE = '/:id',
  DELETE = '/delete/:id',
}

export interface CreateTransactionInput {
  name: string;
  amount: number;
  income: boolean;
}

export interface GetTransactionInput {
  id?: string;
}

export interface DeleteTransactionInput {
  id?: string;
}
