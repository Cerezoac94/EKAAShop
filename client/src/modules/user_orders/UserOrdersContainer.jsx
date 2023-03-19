import UserOrdersMap from "./components/UserOrdersMap";
import { useMeQuery } from "../../redux/service/session.service";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const UserOrdersContainer = () => {
  const { data:me, isLoading, error } = useMeQuery()
  const navigate = useNavigate()
  if(!error){
    return isLoading ? (
      <Loading/>
    ) : (
      <UserOrdersMap me={me.result.id} />
    )
  }else{
    navigate("/")
  }
  
};

export default UserOrdersContainer;
