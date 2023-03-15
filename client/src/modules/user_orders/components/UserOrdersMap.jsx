import React from "react";
import UserOrders from "./UserOrders";
import { useGetOrderByUserQuery } from "../../../redux/service/order.service";
import ErrorForm from "../../../components/errors/ErrorForm";

const UserOrdersMap = ({ me }) => {
  const { data: results = [], isLoading, error } = useGetOrderByUserQuery(me);

  return error ? (
    <ErrorForm message={error.data.message} />
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    results.results.map((order) => <UserOrders order={order} key={order.id} />)
  );
};

export default UserOrdersMap;
