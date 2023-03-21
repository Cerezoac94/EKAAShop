import { Outlet, Navigate } from "react-router-dom"
import { useMeQuery } from "../../redux/service/session.service"

const IsAdmin = () => {
  const { data, isLoading, error} = useMeQuery();
  if(!isLoading){
  return error ? (
    <Navigate to="/" replace={true}  />
  ) : (
    data?.result.role == 1 ? <Outlet />: <Navigate to="/" replace={true}  />
  )
}else{
  <h3>Cargando...</h3>
}
}

export default IsAdmin