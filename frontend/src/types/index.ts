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
