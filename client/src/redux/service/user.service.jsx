import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/${id}`
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body
      })
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${ id }`,
        method: 'PUT',
        body
      })
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${ id }`,
        method: 'DELETE'
      })
    })
  })
})

export const { useGetUserByIdQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = users