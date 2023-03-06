import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishes = createApi({
  reducerPath: 'wishes',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/wish' }),
  tagTypes: ['Wishes'],
  endpoints: (builder) =>({
    getWish: builder.query({
      query: (id) => `/${ id }`,
      providesTags: ['Wishes']
    }),
    addProductWish: builder.mutation({
      query: (params) => ({
        url: `/${ params.idUser}/${params.idProduct}`,
        method: 'POST'
      }),
      invalidatesTags: [ 'Wishes' ]
    })
  })
})

export const { useGetWishQuery, useAddProductWishMutation } = wishes