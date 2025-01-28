import axios from "axios";
import { backendUrl } from "../../../App";

const fetchProductService = async (productId: string) => {
	const response = await axios.get(backendUrl + "/api/product/fetch-product", {
		params: {
			id: productId,
		},
	});
	return response;
};

export default fetchProductService;
