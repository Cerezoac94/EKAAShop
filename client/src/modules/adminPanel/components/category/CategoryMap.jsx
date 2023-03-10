import { useGetAllCategoryQuery } from "../../../../redux/service/category.service";
import Category from "./Category";

const CategoryMap = () => {
  const { data: results = [], isLoading, error } = useGetAllCategoryQuery();

  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    <ul>
      {results.results.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </ul>
  );
};

export default CategoryMap;
