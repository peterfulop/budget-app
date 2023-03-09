import { AsyncProcessName, Status } from './enums';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  income: boolean;
  createdAt: string;
}

export interface CreateTransactionInput {
  name: string;
  amount: number;
  income: boolean;
}

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

export interface IAsyncProcess {
  status: Status | null;
  processName: AsyncProcessName | null;
}
