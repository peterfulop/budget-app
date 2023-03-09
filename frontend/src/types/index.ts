export enum API {
  GET_TRANSACTIONS = '',
  CREATE_TRANSACTION = '/create',
  DELETE_TRANSACTION = '/delete/:id',
  BASE_URL = 'http://localhost:5100/api/transactions',
}
export enum Method {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum Routes {
  APP = '/',
  NOT_FOUND = '/*',
}

export enum FilterState {
  ALL = 'ALL',
  INCOMES = 'INCOMES',
  EXPENSES = 'EXPENSES',
}

export type Transaction = {
  id: string;
  name: string;
  amount: number;
  income: boolean;
  createdAt: string;
};

export type CreateTransactionInput = {
  name: string;
  amount: number;
  income: boolean;
};

export interface IRoute {
  path: string;
  name: string;
  component: any;
}

export interface INotification {
  status: Status;
  title: string;
  message: string;
}

export enum AsyncProcessName {
  GET_TRANSACTIONS = 'getTransactions',
  CREATE_TRANSACTION = 'createTransaction',
  DELETE_TRANSACTION = 'deleteTransaction',
}

export interface IAsyncProcess {
  status: Status | null;
  processName: AsyncProcessName | null;
}
