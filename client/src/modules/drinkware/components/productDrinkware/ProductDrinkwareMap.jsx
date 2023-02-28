import { useGetAllProductsQuery } from "../../../../redux/service/productService";
import ProductDrinkware from "./ProductDrinkware";

const ProductDrinkwareMap = () => {
  const { data:results=[], isLoading, error } = useGetAllProductsQuery();
  console.log('data', results.results)

	return isLoading ?(
    <h3>Cargando...</h3>// Aquí iría un spinner...Si tuviera uno >:(
  ):(
    // <h1>results</h1>
    
		<section>
			ProductDrinwareMap
     { 
     results.results.map(p => <ProductDrinkware product={p} key={p.id} />)
			}
		</section>
	);
};

export default ProductDrinkwareMap;
