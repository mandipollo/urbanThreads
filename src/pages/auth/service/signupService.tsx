import axios from "axios";
import { backendUrl } from "../../../App";

interface SignupServiceProps {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
const signupService = async ({
	firstName,
	lastName,
	email,
	password,
}: SignupServiceProps) => {
	const response = await axios.post(backendUrl + "/api/user/register", {
		firstName,
		lastName,
		email,
		password,
	});

	return response;
};

export default signupService;
