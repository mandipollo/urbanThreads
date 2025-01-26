import { backendUrl } from "../../../App";
import axios from "axios";

const fetchBestsellerProducts = async () => {
	const response = await axios.get(
		backendUrl + "/api/product/fetch-bestseller-products"
	);

	return response;
};

export default fetchBestsellerProducts;
