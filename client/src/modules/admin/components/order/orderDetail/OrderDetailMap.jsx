import { useGetOrderByIdQuery } from "../../../../redux/service/order.service";
import OrdersAdmin from "./OrderDetail";

const OrderDetailMap = () => {
	const { data: res = [], isLoading, error } = useGetOrderByIdQuery(idOrder);

	if (!error) {
		return isLoading ? (
			<h3>Cargando...</h3> // Aquí iría un spinner...Si tuviera uno >:(
		) : (
			<section>
				<OrdersAdmin order={res.results} />
			</section>
		);
	}
};

export default OrderDetailMap;
