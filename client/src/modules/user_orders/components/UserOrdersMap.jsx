import React from "react";
import UserOrders from "./UserOrders";
import { useGetOrderByUserQuery } from "../../../redux/service/order.service";
import Loading from "../../../components/loading/Loading";
import ErrorFetch from "../../../components/errors/ErrorFetch";

const UserOrdersMap = ({ me }) => {
  const { data: results = [], isLoading, error } = useGetOrderByUserQuery(me);

  return error ? (
    <ErrorFetch title="#Mis pedidos" message={error?.data?.message} />
  ) : isLoading ? (
    <Loading/>
  ) : (

    <section className="listCardOrder">
      <label className="wish_header">#Mis pedidos</label>
      {results.results.map((order, i) => <UserOrders order={ order } key={ order.id } i={ i+1 } />)}
    </section>
  
  );
};

export default UserOrdersMap;
