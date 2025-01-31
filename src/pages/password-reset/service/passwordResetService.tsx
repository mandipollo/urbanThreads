import axios from "axios";
import { backendUrl } from "../../../App";

interface PasswordResetServiceProps {
	token: string;
	newPassword: string;
}
const passwordResetService = async ({
	token,
	newPassword,
}: PasswordResetServiceProps) => {
	const response = await axios.post(backendUrl + "/api/user/reset-password", {
		token,
		password: newPassword,
	});

	return response;
};

export default passwordResetService;
