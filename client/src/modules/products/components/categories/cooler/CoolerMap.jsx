import Loading from "../../../../../components/loading/Loading";
import { useGetProductByCategoryQuery } from "../../../../../redux/service/product.service";
// import Product from "../../Product"
import Product from "../../presentacional/Product";

const CoolerMap = () => {
  const {
    data: results = [],
    isLoading,
    error,
  } = useGetProductByCategoryQuery(2);


  return error ? (
    <h3>{error?.data?.message}</h3>
  ) : isLoading ? (
    <Loading/>
  ) : (
    <section className="productContainer">
      {results?.results[0]?.Products.map((p) => <Product product={p} key={p.id} />)}
    </section>
  );
};

export default CoolerMap;
