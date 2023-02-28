import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const discounts = createApi({
  reducerPath: 'discounts',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/discount'}),
  endpoints: (builder) => ({
    createDiscount: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body
      })
    })
    // endpoints
  })
})

export const { useCreateDiscountMutation } = discounts