import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories = createApi({
  reducerPath: 'categoies',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/category'}),
  tagTypes: ['Categories'],
  endpoints: (builder) =>({
    createCategory: builder.mutation({
      query: (name) => ({
        url: "",
        method: "POST",
        name,
      })
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