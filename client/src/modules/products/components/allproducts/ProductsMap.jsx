import Loading from "../../../../components/loading/Loading";
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import FilterProducts from "../filterProducts/FilterProducts";
// import Product from "../presentacional/Product";

const ProductsMap = () => {
	const { data: results = [], isLoading, error } = useGetAllProductsQuery();
	
	return error ? (
		<h3>{error?.data?.message}</h3>
	) : isLoading ? (
		<Loading/>
	) : (
		<FilterProducts products={results?.results}/>
	);
};

export default ProductsMap;
