import axios from "axios";
import { backendUrl } from "../../../App";

interface CreateGuestServiceProps {
	cartData: { productId: string; size: string }[];
}

const createGuestService = async ({ cartData }: CreateGuestServiceProps) => {
	const response = await axios.post(backendUrl + "/api/guest/create-guest", {
		cartData,
	});

	return response;
};

export default createGuestService;
