import { useNavigate } from "react-router-dom";
// redux state
import { useAppDispatch } from "../store/store";
import { removeToken } from "../store/tokenSlice";
import { resetAll } from "../store/cartSlice";
import { resetUser } from "../store/userSlice";

const AccountSettings = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSignout = () => {
		dispatch(removeToken());
		dispatch(resetAll());
		dispatch(resetUser());
		navigate("/userAuth");
	};

	return (
		<section className="flex flex-col w-full h-full space-y-4">
			<h2 className="font-bold text-6xl">SETTINGS</h2>

			<div>
				<ul className="space-y-4">
					<li>EDIT DETAILS</li>
					<li>ADD NEW ADDRESS</li>
					<li>ACTIVATE PAY LATER</li>
					<li>CHANGE PASSWORD</li>
					<li>
						<button onClick={handleSignout}>SIGN OUT</button>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default AccountSettings;
