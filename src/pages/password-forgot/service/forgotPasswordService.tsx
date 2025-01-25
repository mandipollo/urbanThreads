import axios from "axios";
import { backendUrl } from "../../../App";

const forgotPasswordService = async (email: string) => {
	const response = await axios.post(
		backendUrl + "/api/user/request-reset-password",
		{
			email,
		}
	);

	return response;
};

export default forgotPasswordService;
