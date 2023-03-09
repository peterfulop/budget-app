import { Text } from './translate.scema';

export const TEXT: Text = {
  pages: {
    home: {
      name: { ENG: 'My Budget Planner' },
      inputs: {
        search: {
          label: {
            ENG: 'Search',
          },
          placeholder: {
            ENG: 'Type to search ...',
          },
        },
      },
    },
    notFound: {
      name: { ENG: 'Not Found' },
      labels: {
        title: { ENG: 'Page Not Found!' },
        content: { ENG: 'Return to the home page:' },
      },
    },
  },
  transactionForm: {
    title: { ENG: 'Cash flow' },
    inputs: {
      name: {
        label: {
          ENG: 'Name:',
        },
        placeholder: {
          ENG: 'e.g:Shopping',
        },
      },
      amount: {
        label: {
          ENG: 'Amount:',
        },
        placeholder: {
          ENG: '3000',
        },
      },
    },
    buttons: {
      expense: { ENG: 'expense' },
      income: { ENG: 'income' },
    },
    alerts: {
      success: {
        ENG: 'You successfully created the transaction!',
      },
    },
    validationErrors: {
      nameRequired: {
        ENG: 'The transaction name is mandatory!',
      },
      amountRequired: {
        ENG: 'The transaction amount is mandatory!',
      },
      nameOnlyText: {
        ENG: 'Only characters or mixed character strings are allowed in the transaction name!',
      },
      amountOnlyNumber: {
        ENG: 'Only numbers are allowed in the transaction amount!',
      },
      amountOnlyInteger: {
        ENG: 'Only integers are allowed in the transaction amount!',
      },
      amountOnlyPositiveNumber: {
        ENG: 'Only positive numbers are allowed in the transaction amount!',
      },
      allRequired: {
        ENG: 'All fields are mandatory!',
      },
      incomeRequired: {
        ENG: 'The transaction type is mandatory!',
      },
    },
  },
  buttons: {
    expenses: { ENG: 'expenses' },
    incomes: { ENG: 'incomes' },
    all: { ENG: 'all' },
    delete: { ENG: 'delete' },
    back: { ENG: 'back' },
  },
  general: {
    loading: { ENG: 'loading ...' },
    fetchingData: { ENG: 'fetching data ...' },
    serverError: { ENG: 'Server Error. Something went wrong! :( ' },
    confirmDelete: { ENG: 'Dou you really want to delete this item?' },
    noExpenses: { ENG: 'No expenses yet ...' },
    noTransactions: { ENG: 'No transactions yet ...' },
  },
  labels: {
    budget: {
      ENG: 'Budget:',
    },
    remaining: {
      ENG: 'Remaining:',
    },
    spentSoFar: {
      ENG: 'Spent so far:',
    },
    mostExpensive: {
      ENG: 'Most expensive action ever',
    },
    top3: {
      ENG: 'Top 3 ',
    },
    chartTitle: {
      ENG: 'Chart',
    },
    chartPercentage: {
      ENG: 'of budget spent',
    },
  },
  notifications: {
    getTransactions: {
      loading: {
        title: { ENG: 'transactions' },
        message: { ENG: 'Loading transactions ...' },
      },
      success: {
        title: { ENG: 'transactions' },
        message: { ENG: 'Successfully loaded transactions!' },
      },
      error: {
        title: { ENG: 'Error!' },
        message: { ENG: 'Loading transactions failed!' },
      },
    },
    createTransaction: {
      loading: {
        title: { ENG: 'transaction' },
        message: { ENG: 'Creating transaction ...' },
      },
      success: {
        title: { ENG: 'transaction' },
        message: { ENG: 'Successfully created transaction!' },
      },
      error: {
        title: { ENG: 'Error!' },
        message: { ENG: 'Creating transaction failed!' },
      },
    },
    deleteTransaction: {
      loading: {
        title: { ENG: 'transaction' },
        message: { ENG: 'Deleting transaction ...' },
      },
      success: {
        title: { ENG: 'transaction' },
        message: { ENG: 'Successfully deleted transaction!' },
      },
      error: {
        title: { ENG: 'Error!' },
        message: { ENG: 'Deleting transaction failed!' },
      },
    },
  },
};
