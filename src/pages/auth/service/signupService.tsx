import axios from "axios";
import { backendUrl } from "../../../App";

const signupService = async (name: string, email: string, password: string) => {
	const response = await axios.post(backendUrl + "/api/user/register", {
		name,
		email,
		password,
	});

	return response;
};

export default signupService;
