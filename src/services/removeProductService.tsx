import axios from "axios";
import { backendUrl } from "../App";

const removeProductService = async (token: string, productId: string) => {
	try {
		if (!token || !productId) {
			throw new Error("Invalid operation.");
		}
		const response = await axios.delete(
			backendUrl + "/api/user/removeFromCart",
			{
				data: {
					productId,
				},
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return response;
	} catch (error) {
		let message;
		if (error instanceof Error) message = error.message;
		else message = String(error);
		console.error({ message });
		throw new Error(message);
	}
};

export default removeProductService;
