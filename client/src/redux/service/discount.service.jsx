import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const discounts = createApi({
  reducerPath: 'discounts',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/discount'}),
  tagTypes: ['Discounts'],
  endpoints: (builder) => ({
    createDiscount: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body
      })
    }),
    getAllDiscounts: builder.query({
      query: () => '',
      providesTags: ['Discounts']
    }),
    updateDiscount: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${ id }`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Discounts']
    }),
    deleteDiscount: builder.mutation({
      query: (id) => ({ 
        url: `/${id}`,
        method: 'DELETE',
       }),
      invalidatesTags: ['Discounts']
    })
  })
})

export const { useCreateDiscountMutation, useGetAllDiscountsQuery, useUpdateDiscountMutation, useDeleteDiscountMutation } = discounts