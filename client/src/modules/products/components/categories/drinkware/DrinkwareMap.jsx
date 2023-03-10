import { useGetProductByCategoryQuery } from "../../../../../redux/service/product.service";
import Product from "../../presentacional/Product";

const DrinkwareMap = () => {
  const {
    data: results = [],
    isLoading,
    error,
  } = useGetProductByCategoryQuery(1);

  return error ? (
    <h3>{error?.data?.message}</h3>
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    <section className="productContainer">
      {results?.results[0]?.Products.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </section>
  );
};
export default DrinkwareMap;
