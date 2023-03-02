export enum Routes {
  HOME = '/',
  NOT_FOUND = '/*',
}

export default interface IRoute {
  path: string;
  name: string;
  component: any;
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

export enum FilterState {
  EXPENSES = 'EXPENSES',
  INCOMES = 'INCOMES',
  ALL = 'ALL',
}

export interface ITransactions {
  refetch: () => Promise<void>;
}
