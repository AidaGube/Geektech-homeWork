import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com/posts',
    }),
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: (id) => `/${id}`,
      }),
    }),
  });
  
export const { useGetTodosQuery } = api;