import { useParams } from "react-router-dom";
import OrderDetMap from "./OrderDetMap";

const OrderDetContainer = () => {
  const { idOrder } = useParams();

  return <OrderDetMap order={idOrder} />;
};

export default OrderDetContainer;
