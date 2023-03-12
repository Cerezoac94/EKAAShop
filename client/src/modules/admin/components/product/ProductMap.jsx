import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import Product from "./Product";

const ProductMap = () => {
  const { data: results = [], isLoading, error } = useGetAllProductsQuery();

  if(!error) {
  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    
    results.results.map((product) => (
        <Product product={product} key={product.id} />
      ))
    
  )
    }
};

export default ProductMap;
