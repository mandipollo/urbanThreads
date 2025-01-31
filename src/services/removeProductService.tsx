import axios from "axios";
import { backendUrl } from "../App";

interface RemoveProductServiceProps {
	token: string;
	id: string;
}
const removeProductService = async ({
	token,
	id,
}: RemoveProductServiceProps) => {
	const response = await axios.delete(
		backendUrl + "/api/user/remove-from-cart",
		{
			data: {
				productId: id,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	return response;
};

export default removeProductService;
