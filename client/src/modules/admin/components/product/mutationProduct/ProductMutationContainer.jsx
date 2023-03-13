import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../../../redux/service/product.service";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

const ProductMutationContainer = () => {
	const { id } = useParams();
	const { data: results = [], isLoading, error } = useGetProductByIdQuery(id);
// console.log(results.results);
	if (!error) {
		return isLoading ? (
			<h3>Cargando...</h3>
		) : (
			<section className="mutation">
				<UpdateProduct product={results.results}/>
				<DeleteProduct product={results.results}/>
			</section>
		);
	}
};

export default ProductMutationContainer;
