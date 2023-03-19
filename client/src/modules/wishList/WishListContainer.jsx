import WishProductsListMap from "./components/WishProductsListMap.jsx";
import { useMeQuery } from "../../redux/service/session.service.jsx";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading.jsx";

const WishListContainer = () => {
	const { data: me, isLoading, error } = useMeQuery();
	const navigate = useNavigate();

	if (!error) {
		return isLoading ? (
			<Loading/>
		) : (
			<WishProductsListMap me={me.result.id} />
		);
	}else{
    navigate("/")
  }
};

export default WishListContainer;
