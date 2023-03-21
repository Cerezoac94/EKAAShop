import Loading from "../../../../components/loading/Loading";
import { useGetProductByCategoryQuery } from "../../../../redux/service/product.service";
import Product from "../presentacional/Product";

const ProductsByCategoryMap = ({ category }) => {
  const {
    data: results = [],
    isLoading,
    error,
  } = useGetProductByCategoryQuery(category);

  // return <h3>drinkware</h3>
  return error ? (
    <h3>{error?.data?.message}</h3>
  ) : isLoading ? (
    <Loading/>
  ) : (
    <section className="productContainer">
      {results?.results?.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </section>
  );
}
export default ProductsByCategoryMap