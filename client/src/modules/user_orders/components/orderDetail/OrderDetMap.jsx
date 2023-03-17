import ErrorForm from "../../../../components/errors/ErrorForm";
import { useGetOrderByIdQuery } from "../../../../redux/service/order.service";

import CancelOrder from "../CancelOrder";
import OrderDetail from "./OrderDetail";

const OrderDetMap = ({ order }) => {
  const { data: results = [], isLoading, error } = useGetOrderByIdQuery(order);
  



  return error ? (
    <ErrorForm  message={error?.data?.message}/>
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    <section className="orderDetalle">
      {results.results.Order_Details.map((p, i) => (
        <OrderDetail p={p} key={i} />
      ))}
            
    </section>
  );
};

export default OrderDetMap;
