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
    
    getOrderById: builder.query({
      query: (idOrder) => `/detail/${idOrder}`,
      providesTags: ["Orders"],
    }),
    
    getOrderByUser: builder.query({
      query: (idUser) => `/${idUser}`,
      providesTags: ["Orders"],
    }),
    
    getOrderByProduct: builder.query({
      query: (idProduct) => `/product/${idProduct}`,
      providesTags: ["Orders"],
    }),
    
    createOrder: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
  
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
