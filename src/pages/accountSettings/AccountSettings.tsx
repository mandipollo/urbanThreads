import { useNavigate } from "react-router-dom";
import { useState } from "react";

//misc
import { toast } from "react-toastify";
// redux state
import { useAppDispatch, useAppSelector } from "../../store/store";
import { removeToken } from "../../store/tokenSlice";
import { resetAll } from "../../store/cartSlice";
import { resetUser, updateAddress } from "../../store/userSlice";

// component

// service
import handleAdressUpdateService from "../../services/handleAdressUpdateService";
import PersonalDetails from "./components/PersonalDetails";
import PasswordChange from "./components/PasswordChange";
import handlePasswordChangeService from "../../services/handlePasswordChangeService";
import passwordValidator from "../../utilities/passwordValidator";

const AccountSettings = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	// redux  state
	const token = useAppSelector(state => state.tokenReducer.token);
	const userState = useAppSelector(state => state.userReducer);

	// user address
	const [editAddress, setEditAddress] = useState<boolean>(false);
	const [street, setStreet] = useState<string>(userState.address.street || "");
	const [town, setTown] = useState<string>(userState.address.town || "");
	const [postcode, setPostcode] = useState<string>(
		userState.address.postcode || ""
	);

	const handleAddressUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (!token) {
				throw new Error("Token missing");
			}
			const response = await handleAdressUpdateService(
				street,
				town,
				postcode,
				token
			);

			if (!response.data.success) {
				console.log(response.data.message);
			} else {
				dispatch(updateAddress({ street, town, postcode }));
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			console.error({ message });
			toast.error(message);
		}
	};
	// handle user password change
	const [error, setError] = useState<string>("");
	const [editPassword, setEditPassword] = useState<boolean>(false);
	const [currentPassword, setCurrentPassword] = useState<string>("");
	const [newPassword, setNewPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");

	const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			if (!token) {
				throw new Error("Token missing");
			}

			if (passwordValidator(currentPassword, newPassword, confirmPassword)) {
				const response = await handlePasswordChangeService(
					token,
					currentPassword,
					newPassword,
					confirmPassword
				);
				console.log(response);
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			console.error({ message });
			setError(message);
		}
	};
	// remove all local states when user logs off
	const handleSignout = () => {
		dispatch(removeToken());
		dispatch(resetAll());
		dispatch(resetUser());
		navigate("/userAuth");
	};

	return (
		<section className="flex flex-col w-full h-full  ">
			<h2 className="font-bold text-3xl">SETTINGS</h2>
			<div className="max-w-lg">
				<PersonalDetails
					editAddress={editAddress}
					town={town}
					street={street}
					postcode={postcode}
					setPostcode={setPostcode}
					setStreet={setStreet}
					setTown={setTown}
					setEditAddress={setEditAddress}
					userState={userState}
					handleAddressUpdate={handleAddressUpdate}
				/>
				<PasswordChange
					error={error}
					handlePasswordChange={handlePasswordChange}
					setEditPassword={setEditPassword}
					editPassword={editPassword}
					currentPassword={currentPassword}
					setCurrentPassword={setCurrentPassword}
					setConfirmPassword={setConfirmPassword}
					confirmPassword={confirmPassword}
					setNewPassword={setNewPassword}
					newPassword={newPassword}
				/>

				<button className="p-4" onClick={handleSignout}>
					SIGN OUT
				</button>
			</div>
		</section>
	);
};

export default AccountSettings;
