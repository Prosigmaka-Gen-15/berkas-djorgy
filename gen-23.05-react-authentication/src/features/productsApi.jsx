import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `data`,
    }),
    getAllUsers: builder.query({
      query: () => `user`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllUsersQuery } = productsApi;
