import { useEffect } from "react";
import { useDeleteUserMutation } from "../../../redux/service/user.service";
import { useLogoutMutation } from "../../../redux/service/session.service";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DeleteAccount = ({ me }) => {
	const [deleteUser, { isSuccess }] = useDeleteUserMutation();
	const [logout] = useLogoutMutation();
	const navigate = useNavigate();
	const handleDelete = () => {
		
			Swal.fire({
				title: "Are you sure you want to delete your account?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete!",
			}).then((result) => {
				if (result.isConfirmed) {
					deleteUser(me);
          logout();
					Swal.fire("Deleting account!", "Come back soon!", "success");
				}
			});
	};

	useEffect(() => {
		if (isSuccess) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Your account has been deleted",
				showConfirmButton: false,
				timer: 700,
			});
			navigate("/");
		}
	}, [isSuccess]);

	return (
		<Button className="delete_btn" onClick={handleDelete}>
			Eliminar cuenta
		</Button>
	);
};
export default DeleteAccount;
