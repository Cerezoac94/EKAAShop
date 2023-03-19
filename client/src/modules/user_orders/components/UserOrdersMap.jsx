import React from "react";
import UserOrders from "./UserOrders";
import { useGetOrderByUserQuery } from "../../../redux/service/order.service";
import ErrorForm from "../../../components/errors/ErrorForm";
import Loading from "../../../components/loading/Loading";

const UserOrdersMap = ({ me }) => {
  const { data: results = [], isLoading, error } = useGetOrderByUserQuery(me);

  return error ? (
    <ErrorForm message={error?.data?.message} />
  ) : isLoading ? (
    <Loading/>
  ) : (

    <section className="listCardOrder">
      <label className="wish_header">#My Orders</label>
      {results.results.map((order, i) => <UserOrders order={ order } key={ order.id } i={ i+1 } />)}
    </section>
  
  );
};

export default UserOrdersMap;
