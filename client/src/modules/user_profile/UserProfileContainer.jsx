import UserProfile from "./components/UserProfile";
import { useMeQuery } from "../../redux/service/session.service";
import { useNavigate } from "react-router-dom";

const UserProfileContainer = () => {
	const { data: me, isLoading, error } = useMeQuery();
	const navigate = useNavigate();

	if (!error) {
		return isLoading ? <h3>Cargando...</h3> : <UserProfile me={me.result.id} />;
	}else{
    navigate("/")
  }
};

export default UserProfileContainer;
