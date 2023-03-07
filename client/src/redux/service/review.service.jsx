import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviews = createApi({
  reducerPath: "reviews",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/review" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: ({ params, ...body }) => ({
        url: `/${params.idUser}/${params.idProduct}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getAllReview: builder.query({
      query: () => "",
      providesTags: ["Reviews"],
    }),
    updateReview: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Reviews"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETED",
      }),
    }),
    invalidatesTags: ["Reviews"],
  }),
});

export const {
  useGetAllReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeletedReviewMutation,
} = reviews;
