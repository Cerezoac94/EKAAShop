import WishProductsListMap from "./components/WishProductsListMap.jsx";
import { useMeQuery } from "../../redux/service/session.service.jsx";
import { useNavigate } from "react-router-dom";

const WishListContainer = () => {
	const { data: me, isLoading, error } = useMeQuery();
	const navigate = useNavigate();

	if (!error) {
		return isLoading ? (
			<h3>Cargando...</h3>
		) : (
			<WishProductsListMap me={me.result.id} />
		);
	}else{
    navigate("/")
  }
};

export default WishListContainer;
