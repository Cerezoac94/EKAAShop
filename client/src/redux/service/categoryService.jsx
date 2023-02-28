import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories = createApi({
  reducerPath: 'categoies',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/category'}),
  endpoints: (builder) =>({
    createCategory: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      })
    })


  })
})

export const { useCreateCategoryMutation } = categories