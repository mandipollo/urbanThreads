import { backendUrl } from "../../../App";
import axios from "axios";

interface PlaceOrderServiceProps {
	token: string;
	email: string;
	firstName: string;
	lastName: string;
	street: string;
	town: string;
	postcode: string;
}
const placeOrderService = async ({
	token,
	email,
	firstName,
	lastName,
	street,
	town,
	postcode,
}: PlaceOrderServiceProps) => {
	const response = await axios.post(
		backendUrl + "/api/order/place-order",
		{
			email,
			firstName,
			lastName,
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

export default placeOrderService;
