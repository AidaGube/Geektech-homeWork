import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/posts',
    }),
  }),
});

export const { useGetTodosQuery } = api;