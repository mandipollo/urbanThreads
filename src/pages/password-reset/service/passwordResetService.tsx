import axios from "axios";
import { backendUrl } from "../../../App";

const passwordResetService = async (token: string, newPassword: string) => {
	const response = await axios.post(backendUrl + "/api/user/reset-password", {
		token,
		password: newPassword,
	});

	return response;
};

export default passwordResetService;
