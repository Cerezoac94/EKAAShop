import { useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../../../../redux/service/category.service";
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategory";

const CategoryMutationContainer = () => {
	const { id } = useParams();
	const { data: results = [], isLoading, error } = useGetCategoryByIdQuery(id);
	if (!error){
		return isLoading ? (
			<h3>Cargando...</h3>
		) : (
      <>
      <UpdateCategory category={results.results} />
			<DeleteCategory category={results.results} />
      </>
		)
  }
};
export default CategoryMutationContainer;
