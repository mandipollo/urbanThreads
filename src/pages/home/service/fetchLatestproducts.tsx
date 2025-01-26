import axios from "axios";
import { backendUrl } from "../../../App";

const fetchLatestproducts = async () => {
	const response = await axios.get(
		backendUrl + "/api/product/fetch-latest-products"
	);

	return response;
};

export default fetchLatestproducts;
