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
        content: { ENG: 'Return to the contacts page:' },
      },
    },
  },
  cashFlowForm: {
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
  },
  buttons: {
    expenses: { ENG: 'expenses' },
    incomes: { ENG: 'incomes' },
    all: { ENG: 'all' },
    delete: { ENG: 'delete' },
    back: { ENG: 'back' },
  },
  general: {
    loading: { ENG: 'loading...' },
    fetchingData: { ENG: 'fetching data...' },
    serverError: { ENG: 'Server Error. Something went wrong! :( ' },
    confirmDelete: { ENG: 'Dou you really want to delete this item?' },
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
      ENG: 'Top 3 expenses',
    },
    chart: {
      ENG: 'of budget spent',
    },
  },
  ERRORS: {
    MISSING_INPUTS: { ENG: 'All fields are mandatory!' },
    MISSING_RECORD: {
      ENG: 'Missing record!',
    },
    SERVER_ERROR: { ENG: 'Internal server error!' },
  },
};
