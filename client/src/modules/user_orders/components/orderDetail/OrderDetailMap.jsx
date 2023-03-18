import { useParams } from "react-router-dom";
import OrderDetail from "./OrderDetail";
import { useGetOrderByIdQuery } from "../../../../redux/service/order.service";
import ErrorForm from "../../../../components/errors/ErrorForm";

const OrderDetailMap = () => {
  const { idOrder } = useParams();
  const { data: results = [], isLoading, error } = useGetOrderByIdQuery(idOrder);
  return error ? (
    <ErrorForm  message={error?.data?.message}/>
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    <section className="orderDetalle">
      <label className="wish_header">#Order Detail</label>
      {results.results.Order_Details.map((p, i) => (
        <OrderDetail p={p} key={i} />
      ))}
            
    </section>
  );
};

export default OrderDetailMap;
