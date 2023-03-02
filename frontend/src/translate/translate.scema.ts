import { ServerSideError } from '../types/server-side-errors.enum';

export enum Languages {
  ENG = 'ENG',
}

export type Content = Record<Languages, string>;

export enum CashFlowFomInputs {
  NAME = 'name',
  AMOUNT = 'amount',
}

type CashFlowForm = {
  title: Content;
  buttons: {
    expense: Content;
    income: Content;
  };
  alerts: {
    success: Content;
  };
  inputs: Record<CashFlowFomInputs, { label: Content; placeholder: Content }>;
};

export type Text = {
  pages: {
    home: {
      name: Content;
      labels: Record<string, Content>;
    };
    notFound: {
      name: Content;
      labels: {
        title: Content;
        content: Content;
      };
    };
  };
  cashFlowForm: CashFlowForm;
  buttons: {
    expenses: Content;
    incomes: Content;
    all: Content;
    delete: Content;
    back: Content;
  };
  general: {
    fetchingData: Content;
    loading: Content;
    serverError: Content;
    confirmDelete: Content;
  };
  labels: Record<string, Content>;
  ERRORS: ServerSideErrorObject;
};

export type ServerSideErrorObject = Record<
  keyof typeof ServerSideError,
  Content
>;
