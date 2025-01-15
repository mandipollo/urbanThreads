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
				headers: { token },
				data: {
					productId,
				},
			}
		);
		console.log(response);

		return response.data;
	} catch (error) {
		let message;
		if (error instanceof Error) message = error.message;
		else message = String(error);
		console.error({ message });
		throw new Error(message);
	}
};

export default removeProductService;
