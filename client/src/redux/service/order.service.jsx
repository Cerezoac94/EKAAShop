import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orders = createApi({
  reducerPath: "orders",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/order" }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => "",
      providesTags: ["Orders"],
    }),
    // detail
    getOrderById: builder.query({
      query: (idOrder) => `/detail/${idOrder}`,
      providesTags: ["Orders"],
    }),
    // orders from user
    getOrderByUser: builder.query({
      query: (idUser) => `/${idUser}`,
      providesTags: ["Orders"],
    }),
    // all orders by product
    getOrderByProduct: builder.query({
      query: (idProduct) => `/product/${idProduct}`,
      providesTags: ["Orders"],
    }),
    // revisar si será desde el body o params el idUser
    createOrder: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    // admin, actualizar estado del envío
    updateOrder: builder.mutation({
      query: ({ idOrder, ...body }) => ({
        url: `/${idOrder}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteOrder: builder.mutation({
      query: (idOrder) => ({
        url: `/${idOrder}`,
        method: "DELETE",
        providesTags: ["Orders"],
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteProductOrder: builder.mutation({
      query: ({ params, ...body }) => ({
        url: `/${params.idOrder}/${params.idProduct}`,
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useGetOrderByUserQuery,
  useGetOrderByProductQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useDeleteProductOrderMutation,
} = orders;
