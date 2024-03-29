import Loading from "../../../../components/loading/Loading";
import { useGetAllCategoryQuery } from "../../../../redux/service/category.service";
import Category from "./Category";
import CategoryOption from "./CategoryOption";

const CategoryMap = ({ select }) => {
	const { data: results = [], isLoading, error } = useGetAllCategoryQuery();
 if(!error) {
	return !select ? (
		isLoading ? (
			<Loading/>
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

	)
}
};

export default CategoryMap;
