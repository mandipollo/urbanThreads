import axios from "axios";
import { backendUrl } from "../../../App";

interface AddToCartServiceProps {
	token: string;
	productId: string;
	size: string;
}
const addToCartService = async ({
	token,
	productId,
	size,
}: AddToCartServiceProps) => {
	const response = await axios.post(
		backendUrl + "/api/user/add-to-cart",
		{
			productId,
			size,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return response;
};

export default addToCartService;
