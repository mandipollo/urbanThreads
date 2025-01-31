import axios from "axios";
import { backendUrl } from "../App";

interface HandleAddressUpdateServiceProps {
	street: string;
	town: string;
	postcode: string;
	token: string;
}
const handleAdressUpdateService = async ({
	street,
	town,
	postcode,
	token,
}: HandleAddressUpdateServiceProps) => {
	const response = await axios.put(
		backendUrl + "/api/user/edit",
		{
			street,
			town,
			postcode,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return response;
};

export default handleAdressUpdateService;
