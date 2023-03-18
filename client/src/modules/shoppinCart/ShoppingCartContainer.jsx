import ListCartMap from "./components/listCart/ListCartMap";
import { useMeQuery } from "../../redux/service/session.service";
import { useNavigate } from "react-router-dom";

const ShoppingCartContainer = () => {
	const { data: me, isLoading, error } = useMeQuery();
  const navigate = useNavigate()

	if (!isLoading) {
		return error ?  navigate("/") : <ListCartMap me={me.result.id} />;
	} else {
		<h3>Cargando...</h3>
   
	}
};

export default ShoppingCartContainer;
