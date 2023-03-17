import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../redux/service/session.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ me }) => {
	const [logout] = useLogoutMutation();
	const navigate = useNavigate();
	const handleLogout = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You will be directed to start.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, sign out!",
		}).then((result) => {
			if (result.isConfirmed) {
				logout();
				Swal.fire("Closing session!", "Come back soon!", "success");
				navigate("/");
			}
		});
	};
	return (
		<>
			<OverlayTrigger
				trigger="click"
				placement="bottom"
				rootClose={true}
				overlay={
					<Popover id={`popover-positioned-bottom`}>
						<Popover.Header className="user_menu_header">
							{me ? (
								<section>
									<img src="" className="user_menu_photo" />
									<label className="user_name_label">{`Hello ${me.userName}`}</label>
									{me.role == 1 && <span className="role_span">Admin</span>}
								</section>
							) : (
								<section>
									<Button href="/login" className="user_menu_login_btn">
										Login
									</Button>
									<label>
										New Client?
										<a href="/register" className="user_menu_register">
											Click here!
										</a>
									</label>
								</section>
							)}
						</Popover.Header>
						{me && (
							<>
								<Popover.Body>
									<ul className="user_menu_links">
										<li className="user_menu_item">
											<Link to="/profile">Profile</Link>
										</li>
										<li className="user_menu_item">
											<Link to="/orders">My Orders</Link>
										</li>
										<li className="user_menu_item">
											<Link to="/wish_list">Wish List</Link>
										</li>
										{me.role == 1 && (
											<li className="user_menu_item">
												<Link to="/admin">Administration</Link>
											</li>
										)}
									</ul>
								</Popover.Body>

								<section className="user_menu_links">
									<span onClick={handleLogout} className="user_menu_item">
										Log Out
									</span>
								</section>
							</>
						)}
					</Popover>
				}
			>
				<Button className="user_menu_btn">
					<ion-icon name="person-outline" class="nav_icon"></ion-icon>
				</Button>
			</OverlayTrigger>
		</>
	);
};

export default UserMenu;
