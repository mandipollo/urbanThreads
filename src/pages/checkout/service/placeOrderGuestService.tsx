import axios from "axios";

import { backendUrl } from "../../../App";

interface PlaceOrderGuestServiceProps {
	guestToken: string;
	email: string;
	firstName: string;
	lastName: string;
	street: string;
	town: string;
	postcode: string;
}
const placeOrderGuestService = async ({
	guestToken,
	email,
	firstName,
	lastName,
	street,
	town,
	postcode,
}: PlaceOrderGuestServiceProps) => {
	const response = await axios.post(
		backendUrl + "/api/guest/place-order-guest",
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
				Authorization: `Bearer ${guestToken}`,
			},
		}
	);

	return response;
};

export default placeOrderGuestService;
