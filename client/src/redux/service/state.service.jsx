import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const states = createApi({
  reducerPath: 'states',
  baseQuery: fetchBaseQuery({ baseUrl: 'api/state' }),
  tagTypes: ['States'],
  endpoints: (builder) => ({
    createState: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body
      }),
      invalidatesTags: ['States']
    }),
    getAllStates: builder.query({
      query: () => '',
      providesTags: ['States']
    }),
    updateState: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${ id }`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['States']
    }),
    deleteState: builder.mutation({
      query: (id) => ({
        url: `/${ id }`,
        method: 'DELETE',
        body
      }),
      invalidatesTags: ['States']
    })
  })
})

export const { useCreateStateMutation, useGetAllStatesQuery, useUpdateStateMutation, useDeleteStateMutation } = states;