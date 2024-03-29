import Loading from "../../components/loading/Loading";
import { useGetProductByIdQuery } from "../../redux/service/product.service";
import ProductDetail from "./components/ProductDetail";

const DetailContainer = ({ id }) => {
  const { data: results = [], error, isLoading } = useGetProductByIdQuery(id);

  return error ? (
    <h3>{error.data.message}</h3>
  ) : isLoading ? (
    <Loading/>
  ) : (
   <ProductDetail p={results.results}/>
  );
};

export default DetailContainer;
