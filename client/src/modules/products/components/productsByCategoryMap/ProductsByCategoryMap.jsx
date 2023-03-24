import Loading from "../../../../components/loading/Loading";
import { useGetProductByCategoryQuery } from "../../../../redux/service/product.service";
import FilterProducts from "../filterProducts/FilterProducts";
// import Product from "../presentacional/Product";

const ProductsByCategoryMap = ({ category }) => {
  const {
    data: results = [],
    isLoading,
    error,
  } = useGetProductByCategoryQuery(category);

  return error ? (
    <h3>{error?.data?.message}</h3>
  ) : isLoading ? (
    <Loading/>
  ) : (
    // <section className="productContainer">
    //   {results?.results?.map((p) => (
    //     <Product product={p} key={p.id} />
    //   ))}
    // </section>

    <FilterProducts products={results?.results}/>
  );
}
export default ProductsByCategoryMap