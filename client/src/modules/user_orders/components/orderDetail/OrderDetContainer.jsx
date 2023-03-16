import { useParams } from "react-router-dom";
import OrderDetMap from "./OrderDetMap";

const OrderDetContainer = () => {
  const { idOrder } = useParams();

  return (
    <section className="detalle">
      <OrderDetMap order={idOrder} />
    </section>
  );
};

export default OrderDetContainer;
