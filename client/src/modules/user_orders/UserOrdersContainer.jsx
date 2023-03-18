import UserOrdersMap from "./components/UserOrdersMap";
import { useMeQuery } from "../../redux/service/session.service";
import { useNavigate } from "react-router-dom";

const UserOrdersContainer = () => {
  const { data:me, isLoading, error } = useMeQuery()
  const navigate = useNavigate()
  if(!error){
    return isLoading ? (
      <h3>Cargando...</h3>
    ) : (
      <UserOrdersMap me={me.result.id} />
    )
  }else{
    navigate("/")
  }
  
};

export default UserOrdersContainer;
