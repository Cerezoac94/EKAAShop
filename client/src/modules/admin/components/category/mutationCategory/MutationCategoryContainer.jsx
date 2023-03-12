import { useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../../../../redux/service/category.service";
import DeleteCategory from "./DeleteCategory";

const CategoryMutationContainer = () => {
	const { id } = useParams();
	const { data: results = [], isLoading, error } = useGetCategoryByIdQuery(id);
	if (!error) {
		return isLoading ? (
			<h3>Cargando...</h3>
		) : (
			<section className="mutation">
				<DeleteCategory category={results.results} />
			</section>
		);
	}
};
export default CategoryMutationContainer;
