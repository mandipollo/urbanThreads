import axios from "axios";
import { backendUrl } from "../App";

const fetchProductsService = async (
	category: "Women" | "Men",
	page: number,
	subCategory?: string
) => {
	const response = await axios.get(backendUrl + "/api/product/fetch-products", {
		params: {
			page,
			category: category,
			subCategory: subCategory,
		},
	});

	return response;
};

export default fetchProductsService;
