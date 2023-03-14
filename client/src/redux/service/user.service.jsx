import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${ id }`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${ id }`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const { useGetUserByIdQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = users