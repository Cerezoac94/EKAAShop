//import React from 'react'
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import MightLike from "./MightLike.jsx";

const MightLikeMap = () => {
  const { data:res=[], isLoading, error } = useGetAllProductsQuery();
  console.log('data', res.results)

	return isLoading ?(
    <h3>Cargando...</h3>// Aquí iría un spinner...Si tuviera uno >:(
  ):(
    
		<section>
      
     <MightLike items = {res.results} />
			
		</section>
	);
}

export default MightLikeMap