import axios from "axios";
import { backendUrl } from "../App";

interface FetchProductsServiceprops {
	category: "Women" | "Men";
	page: number;
	subCategory?: string;
}
const fetchProductsService = async ({
	category,
	page,
	subCategory,
}: FetchProductsServiceprops) => {
	const response = await axios.get(backendUrl + "/api/product/fetch-products", {
		params: {
			page,
			category,
			subCategory,
		},
	});

	return response;
};

export default fetchProductsService;
