import UserProfile from "./components/UserProfile";
import { useMeQuery } from "../../redux/service/session.service";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const UserProfileContainer = () => {
	const { data: me, isLoading, error } = useMeQuery();
	const navigate = useNavigate();

	if (!error) {
		return isLoading ? <Loading/> : <UserProfile me={me} />;
	}else{
    navigate("/")
  }
};

export default UserProfileContainer;
