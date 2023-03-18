import Image from "react-bootstrap/Image";

const OrderProductsDetail = ({ product }) => {
	return (
		<tr className="table_detail_product">
			<td colSpan={2} className="order_image_container">
				<Image src={ product?.Product?.image } alt={product?.Product?.name} className="image_order_detail" />
			</td>
			<td className="order_item_container">{ product?.Product?.name }</td>
			<td className="order_item_container">{ product?.quantity }</td>
			<td className="order_item_container">{ `$${product?.unitPrice}` }</td>
		</tr>
	);
};
export default OrderProductsDetail;
