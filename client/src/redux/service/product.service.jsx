import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/product' }),
  tagTypes: ['Products'],
  endpoints: (builder) =>({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: [ 'Products' ]
    }),
    getAllProducts: builder.query({
      query:() => '',
      providesTags:['Products']
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`
    }),
    getProductByCategory: builder.query({
      query: (IdCategory) => `/${ IdCategory }`
    }),
    getProductsWithDiscount: builder.query({
      query: () => ``
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${ id }`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Products']
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${ id }`,
        method: 'DELETE'
      })
    }),
    invalidatesTags: ['Products']

  })
})

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useGetProductsWithDiscountQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} = products