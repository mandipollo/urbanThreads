import axios from "axios";
import { backendUrl } from "../../../App";

const signupService = async (
	firstName: string,
	lastName: string,
	email: string,
	password: string
) => {
	const response = await axios.post(backendUrl + "/api/user/register", {
		firstName,
		lastName,
		email,
		password,
	});

	return response;
};

export default signupService;
