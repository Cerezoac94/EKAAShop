import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Table }from "react-bootstrap";
import { useGetOrderByIdQuery } from "../../../../../redux/service/order.service";
import OrderProductsDetail from "./OrderProductsDetail";
import { useUpdateOrderMutation } from "../../../../../redux/service/order.service";
import Swal from "sweetalert2";

const OrderDetail = () => {
	const { id } = useParams();
	const { data: results = [], isLoading, error } = useGetOrderByIdQuery(id);
	const [update, { isLoading: loading, isSuccess }] = useUpdateOrderMutation();
	const navigate = useNavigate();
	const handleClick = (idOrder) => {
		update({ idOrder, shipmentState: "enviado" });
	};

	useEffect(() => {
		if (isSuccess) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Order order shipped",
				showConfirmButton: false,
				timer: 1000,
			});
			setTimeout(() => {
				navigate("/admin/orders_list");
			}, 1100);
		}
	}, [isSuccess]);

	if (!error) {
		return isLoading || loading ? (
			<h3>Cargando...</h3>
		) : (
			<section className="detail_order_container">
				<section className="detail_header">
					<label htmlFor="modal_header_title">
						{results.results.id.toString().padStart(6, "0")}
					</label>
					<label htmlFor="modal_header_date" className="modal_header_date">
						{new Date(results.results.orderDate).toLocaleDateString()}
					</label>
				</section>
				<section>
					<Table hover responsive="xl" className="table_container">
						<tbody className="table_body">
							<tr className="table_header">
								<th className="item_sumary">Item Sumary</th>
								<th></th>
								<th>Qty</th>
								<th>Price</th>
							</tr>
							{results.results.Order_Details.map((product, key) => (
								<OrderProductsDetail product={product} key={key} />
							))}
						</tbody>
					</Table>
					<Table
						hover
						responsive="xl"
						className="table_container customer_details"
					>
						<tbody className="table_body">
							<tr className="table_header">
								<th className="item_sumary">Customer and Order details</th>
							</tr>
							<tr className="order_details_container">
								<td className="order_label_detail">
									<label htmlFor="order_title_item">Customer name</label>
									<label htmlFor="order_title_item">
										{`${results.results.User.firstName} ${results.results.User.lastName}`}
									</label>
								</td>
							</tr>
							<tr className="order_details_container">
								<td className="order_label_detail">
									<label htmlFor="order_title_item">Contact info</label>
									<label htmlFor="order_title_item">
										{results.results.User.phone}
									</label>
								</td>
							</tr>
							<tr className="order_details_container">
								<td className="order_label_detail">
									<label htmlFor="order_title_item">Address</label>
									<label
										htmlFor="order_title_item"
										className="order_address_label"
									>
										{results.results.User.adress}
									</label>
								</td>
							</tr>
						</tbody>
					</Table>
				</section>
				{results.results.shipmentState === "no enviado" && (
					<section>
						<Button
							onClick={() => handleClick(results.results.id)}
							className="view_order_btn"
						>
							Mark as complete
						</Button>
					</section>
				)}
			</section>
		);
	}
};

export default OrderDetail;
