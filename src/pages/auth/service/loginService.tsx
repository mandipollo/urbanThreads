import axios from "axios";
import { backendUrl } from "../../../App";

interface LoginServiceProps {
	email: string;
	password: string;
}
const loginService = async ({ email, password }: LoginServiceProps) => {
	const response = await axios.post(backendUrl + "/api/user/login", {
		email,
		password,
	});

	return response;
};

export default loginService;
