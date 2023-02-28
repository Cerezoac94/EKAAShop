import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/product'}),
  tagTypes:['Products'],
  endpoints: (builder) =>({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      })
    }),

    getAllProducts: builder.query({
      query:()=>'/',
      providesTags:['Products']
    })

  })
})

export const { useCreateProductMutation, useGetAllProductsQuery } = products