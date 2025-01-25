import axios from "axios";
import { backendUrl } from "../../../App";

const loginService = async (email: string, password: string) => {
	const response = await axios.post(backendUrl + "/api/user/login", {
		email,
		password,
	});

	return response;
};

export default loginService;
