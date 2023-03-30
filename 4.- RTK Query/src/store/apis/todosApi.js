import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),

    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
      expires: 6000, // un minuto
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
