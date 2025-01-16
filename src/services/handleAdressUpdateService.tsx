import axios from "axios";
import { backendUrl } from "../App";

const handleAdressUpdateService = async (
	street: string,
	town: string,
	postcode: string,
	token: string
) => {
	const response = await axios.put(
		backendUrl + "/api/user/edit",
		{
			street,
			town,
			postcode,
		},
		{
			headers: {
				token,
			},
		}
	);
	return response;
};

export default handleAdressUpdateService;
