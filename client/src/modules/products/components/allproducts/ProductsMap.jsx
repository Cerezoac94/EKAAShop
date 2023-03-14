import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import Product from "../presentacional/Product";
import Container from 'react-bootstrap/Container'


const ProductsMap = () => {
	const { data: results = [], isLoading, error } = useGetAllProductsQuery();	
	console.log("🚀 ~ file: ProductsMap.jsx:7 ~ ProductsMap ~ error:", error)
	
	return error ? (
		<h3>{error?.data?.message}</h3>
	) : isLoading ? (
		<h3>Cargando...</h3>
	) : (
		<Container className="productContainer">
		{results?.results?.map((product) => <Product product={product} key={product.id}/>)}
		</Container>
	);
};

export default ProductsMap;
