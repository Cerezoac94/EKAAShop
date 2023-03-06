import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carts = createApi({
  reducerPath: 'carts',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/cart' }),
  tagTypes: ['Carts'],
  endpoints: (builder)=> ({
    getCart: builder.query({
      query: (idUser) => `/${ idUser }`,
      providesTags: ['Carts']
    }),
    addProductCart: builder.mutation({
      query: ({ params, ...body }) => ({
        url: `/${ params.idUser }/${ params.idProduct }`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Carts']
    }),
    incrementProductCart: builder.mutation({
      query: (params) => ({
        url: `/increase/${ params.idCart }/${ params.idProduct }`,
        method: 'PUT'
      }),
      invalidatesTags: ['Carts']
    }),
    decrementProductCart: builder.mutation({
      query: (params) => ({
        url: `/decrease/${ params.idCart }/${ params.idProduct }`,
        method: 'PUT'
      }),
      invalidatesTags: ['Carts']
    }),
    deleteProductCart: builder.mutation({
      query: (params) => ({
        url: `/${ params.idCart }/${params.idProduct}`,
        method: 'DELETE'
      })
    })
  })
})

export const { useGetCartQuery, useAddProductCartMutation, useIncrementProductCartMutation, useDecrementProductCartMutation, useDeleteProductCartMutation } = carts