import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const sessions = createApi({
  reducerPath: 'sessions',
  baseQuery: fetchBaseQuery({baseUrl: '/api/session'}),
  tagTypes: ['Me'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body
      })
    }),
    me: builder.query({
      query: () => '/me',
      providesTags: ['Me']
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      }),
      invalidatesTags: ['Me']
    })

  })
})

export const { useLoginMutation, useMeQuery, useLogoutMutation } = sessions