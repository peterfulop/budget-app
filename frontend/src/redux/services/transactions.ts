import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, CreateTransactionInput, Method, Transaction } from '../../types';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.BASE_URL,
  }),
  tagTypes: ['Transactions'],
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => API.GET_TRANSACTIONS,
      providesTags: ['Transactions'],
    }),
    createTransaction: builder.mutation<Transaction, CreateTransactionInput>({
      query: (transaction) => {
        return {
          url: API.CREATE_TRANSACTION,
          method: Method.POST,
          body: transaction,
        };
      },
      invalidatesTags: ['Transactions'],
    }),
    deleteTransaction: builder.mutation({
      query: (id) => {
        return {
          url: API.DELETE_TRANSACTION.replace(':id', id),
          method: Method.DELETE,
        };
      },
      invalidatesTags: ['Transactions'],
    }),
  }),
});
