import { useGetUserByIdQuery } from "../../../redux/service/user.service";
import Container from "react-bootstrap/Container";
import BasicUserInfo from "./BasicUserInfo";


const UserProfile = ({ me }) => {
  const { data: results = [], isLoading, error } = useGetUserByIdQuery(me)

  console.log(results);
  if(!error){
  return isLoading? (<h3>Cargando...</h3>
  ):(
    <Container fluid className="user_profile_container">
      <section className="profile_header">
        <h1>Welcome {`${results.results.firstName}`} </h1>
      </section>
      <section>
        <BasicUserInfo data={results.results}/>
      </section>


    </Container>
  )
}
};

export default UserProfile;
