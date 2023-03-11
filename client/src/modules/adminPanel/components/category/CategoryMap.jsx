import { useGetAllCategoryQuery } from "../../../../redux/service/category.service";
import Category from "./Category";
import CategoryOption from "./CategoryOption";

const CategoryMap = ({ select }) => {
	const { data: results = [], isLoading, error } = useGetAllCategoryQuery();
	return error ? (
		<h3>{error?.data?.message}</h3>
	) : !select ? (
		isLoading ? (
			<h3>Cargando...</h3>
		) : (
			results.length != 0 &&
			results.results.map((category) => (
				<Category category={category} key={category.id} />
			))
		)
	) : (
		results.length != 0 &&
		results.results.map((category) => (
			<CategoryOption category={category} key={category.id} />
		))

	);
};

export default CategoryMap;
