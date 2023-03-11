import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const OrderList = ({ data, handleSearch, handleSelect }) => {
	return (
		<Container fluid className="orders_list_container">
			<Container fluid className="list_header_container">
				<Form.Control
					type="search"
					aria-label="search"
					onChange={handleSearch}
					className="input_search_order"
					placeholder="Search by date"
				/>
				<select onChange={handleSelect} name="select" className="status_filter">
					<option value="no enviado">No enviado</option>
					<option value="enviado">Envidado</option>
				</select>
			</Container>
			<Table hover responsive="xl" className="table_container">
				{/* responsive = "sm" */}
				<tbody className="table_body">
					<tr>
						<th>Order #</th>
						<th>Order date</th>
						<th>Paid</th>
						<th>Shipment</th>
						<th>total</th>
						<th>action</th>
					</tr>

					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{new Date(item.orderDate).toLocaleDateString()}</td>
							<td>
								{item.paid ? (
									<ion-icon
										id="icon_paid_true"
										name="checkmark-circle-outline"
									></ion-icon>
								) : (
									<ion-icon
										id="icon_paid_false"
										name="close-circle-outline"
									></ion-icon>
								)}
							</td>
							<td>{item.shipmentState}</td>
							<td>{`$${item.total}`}</td>
							<td className="buttons_container">
								<button className="view_order_btn">View</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default OrderList;
