import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetUserById } = users