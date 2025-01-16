import axios from "axios";
import { backendUrl } from "../App";

const handlePasswordChangeService = async (
	currentPassword: string,
	newPassword: string,
	confirmPassword: string,
	token: string
) => {
	const response = await axios.put(
		backendUrl + "/api/user/change-password",
		{
			currentPassword,
			newPassword,
			confirmPassword,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return response;
};

export default handlePasswordChangeService;
