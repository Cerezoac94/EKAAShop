import { useGetUserByIdQuery } from "../../../redux/service/user.service";
import Container from "react-bootstrap/Container";
import BasicUserInfo from "./BasicUserInfo";
import Loading from "../../../components/loading/Loading";
import DeleteAccount from "./DeleteAccount";

const UserProfile = ({ me }) => {
	
	const {
		data: results = [],
		isLoading,
		error,
	} = useGetUserByIdQuery(me.result.id);

	if (!error) {
		return isLoading ? (
			<Loading />
		) : (
			<Container fluid className="user_profile_container">
				<section className="profile_header">
					<label className="profile_welcome_label">
						¡Bienvenido {`${results.results.firstName}`}!
					</label>
				</section>
				<section>
					<BasicUserInfo user={results.results} />
				</section>
				{me.result.role == 2 && <section className="btn_section_container" >
					<DeleteAccount me={me.result.id} />
				</section>}
			</Container>
		);
	}
};

export default UserProfile;
