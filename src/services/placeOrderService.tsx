import { backendUrl } from "../App";
import axios from "axios";

const placeOrderService = async (token: string) => {
	const response = await axios.post(
		backendUrl + "/api/order/place-order",
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	return response;
};

export default placeOrderService;
