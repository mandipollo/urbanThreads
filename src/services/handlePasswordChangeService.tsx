import axios from "axios";
import { backendUrl } from "../App";

interface handlePasswordChangeServiceProps {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
	token: string;
}
const handlePasswordChangeService = async ({
	currentPassword,
	newPassword,
	confirmPassword,
	token,
}: handlePasswordChangeServiceProps) => {
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
