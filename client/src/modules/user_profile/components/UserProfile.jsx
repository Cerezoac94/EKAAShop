import { useGetUserByIdQuery } from "../../../redux/service/user.service";
import Container from "react-bootstrap/Container";
import BasicUserInfo from "./BasicUserInfo";


const UserProfile = () => {
  // useMeQuery
  const me = 1
  const { data: results = [], isLoading, error } = useGetUserByIdQuery(me)

  if(!error){
  return isLoading? (<h3>Cargando...</h3>
  ):(
    <Container fluid className="user_profile_container">
      <section className="profile_header">
        <label className="profile_welcome_label">¡Welcome {`${results.results.firstName}`}!</label>
      </section>
      <section>
        <BasicUserInfo user={results.results}/>
      </section>


    </Container>
  )
}
};

export default UserProfile;
