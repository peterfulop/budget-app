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

export enum AsyncProcessName {
  GET_TRANSACTIONS = 'getTransactions',
  CREATE_TRANSACTION = 'createTransaction',
  DELETE_TRANSACTION = 'deleteTransaction',
}
