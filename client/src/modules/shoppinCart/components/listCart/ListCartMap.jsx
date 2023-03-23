import { useGetCartQuery } from "../../../../redux/service/cart.service";
import ErrorFetch from "../../../../components/errors/ErrorFetch";
import WishCart from "../../../../components/wishCart/WishCart";
import CreateOrder from "../../../user_orders/components/CreateOrder";
import Loading from "../../../../components/loading/Loading";

const ListCartMap = ({ me }) => {
	const { data: results = [], error, isLoading } = useGetCartQuery(me);
	let total = 0;
	if (!error && !isLoading) {
		total = results.results.Products.reduce(
			(acc, p) => acc + p.price * p.Cart_Product.quantity,
			0
		);
	}
	return error ? (
		<ErrorFetch title="#Cart" message={error?.data?.message} />
	) : isLoading ? (
		<Loading/>
	) : (
		<section className="listCart">
			<label className="wish_header">#Carrito</label>
			{results?.results?.Products.map((p) => (
				<WishCart p={p} title={"Cart"} me={me} key={p.id} />
			))}
			<h1 style={{ textAlign: "center" }}>Total: ${total}</h1>
			{results?.results?.Products && <CreateOrder me={me} />}
		</section>
	);
};

export default ListCartMap;
