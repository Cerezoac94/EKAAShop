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
      query: ({id, ...body }) => ({
        url: `/${ id }`,
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
      query: ({idCart, idProduct}) => ({
        url: `/${ idCart }/${idProduct}`,
        method: 'DELETE'
      }),
      invalidatesTags:['Carts']
    })
  })
})

export const { useGetCartQuery, useAddProductCartMutation, useIncrementProductCartMutation, useDecrementProductCartMutation, useDeleteProductCartMutation } = carts