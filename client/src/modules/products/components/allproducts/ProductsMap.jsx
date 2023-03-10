import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import Product from "../Product";

const ProductsMap = () => {
	const { data: results = [], isLoading, error } = useGetAllProductsQuery();	return error ? (
		<h3>{error?.data?.message}</h3>
	) : isLoading ? (
		<h3>Cargando...</h3>
	) : (
		results.results.map((product) => <Product product={product} key={product.id}/>)
	);
};

export default ProductsMap;
