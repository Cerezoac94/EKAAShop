import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/category'}),
  tagTypes: ['Categories'],
  endpoints: (builder) =>({
    createCategory: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Categories"]
    }),
    getAllCategory: builder.query({
      query: ()=>'',
      providesTags:['Categories']
    }),
    // updateCategory,
    deleteCategory: builder.mutation({
      query: (id)=>({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ["Categories"]
    })

  })
})

export const { useCreateCategoryMutation, useGetAllCategoryQuery, useDeleteCategoryMutation } = categories