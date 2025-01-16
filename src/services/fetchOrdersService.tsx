import axios from "axios";
import { backendUrl } from "../App";

const fetchOrdersService = async (token: string) => {
	const response = await axios.post(
		backendUrl + "/api/order/get-user-orders",
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return response;
};

export default fetchOrdersService;
