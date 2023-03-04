export enum Languages {
  ENG = 'ENG',
}

export type Content = Record<Languages, string>;

export enum TransactionInputs {
  NAME = 'name',
  AMOUNT = 'amount',
}

export enum Currency {
  HUF = 'HUF',
}

export enum BaseLabels {
  BUDGET = 'budget',
  REMAINING = 'remaining',
  SPENT_SO_FAR = 'spentSoFar',
  MOST_EXPENSIVE = 'mostExpensive',
  TOP3 = 'top3',
  CHART_TITLE = 'chartTitle',
  CHART_PERCENTAGE = 'chartPercentage',
}

type TransactionForm = {
  title: Content;
  buttons: {
    expense: Content;
    income: Content;
  };
  alerts: {
    success: Content;
  };
  inputs: Record<TransactionInputs, { label: Content; placeholder: Content }>;
  validationErrors: {
    nameRequired: Content;
    amountRequired: Content;
    nameOnlyText: Content;
    amountOnlyNumber: Content;
    amountOnlyInteger: Content;
    amountOnlyPositiveNumber: Content;
    allRequired: Content;
    incomeRequired: Content;
  };
};

export type Text = {
  pages: {
    home: {
      name: Content;
      inputs: {
        search: { label: Content; placeholder: Content };
      };
    };
    notFound: {
      name: Content;
      labels: {
        title: Content;
        content: Content;
      };
    };
  };
  transactionForm: TransactionForm;
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
    noTransactions: Content;
    noExpenses: Content;
  };
  labels: Record<BaseLabels, Content>;
};
