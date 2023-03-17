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
    <section className="listCardOrder">
      {results.results.map((order, i) => <UserOrders order={order} key={order.id} i={i+1} />)}
    </section>
    
  );
};

export default UserOrdersMap;
