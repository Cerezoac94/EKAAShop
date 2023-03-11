import { useGetOrderByIdQuery } from "../../../../redux/service/order.service"
import OrdernAdminView from "./OrdernAdminView"

const OrdernAdminViewMap = () => {
    const {data:res=[], isLoading, error } = useGetOrderByIdQuery(idOrder);
    console.log('order_data', res.results)
  return isLoading ?(
    <h3>Cargando...</h3>// Aquí iría un spinner...Si tuviera uno >:(
  ):(
    
		<section>
      
     <OrdernAdminView order = {res.results} />
			
		</section>
	);
}

export default OrdernAdminViewMap             