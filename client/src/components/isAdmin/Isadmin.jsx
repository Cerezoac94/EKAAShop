import { Outlet, Navigate } from "react-router-dom"
import { useMeQuery } from "../../redux/service/session.service"

const IsAdmin = () => {
  const { data, isLoading} = useMeQuery();
  // console.log(data);
  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    data?.result.role == 1 ? <Outlet />: <Navigate to="/" replace={true}  />
    // data && <Outlet />
  );
}

export default IsAdmin