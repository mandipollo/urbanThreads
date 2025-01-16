import axios from "axios";
import { backendUrl } from "../App";

const handlePasswordChangeService = async (
	currentPassword: string,
	newPassword: string,
	confirmPassword: string,
	token: string
) => {
	const response = await axios.put(
		backendUrl + "/api/user/passwordChange",
		{
			currentPassword,
			newPassword,
			confirmPassword,
		},
		{
			headers: {
				token,
			},
		}
	);
	return response;
};

export default handlePasswordChangeService;
