import { useEffect, useState } from "react";
import axios from "axios";

import { backendUrl } from "../../../App";
import { toast } from "react-toastify";
import { Product } from "../../../types/types";

// hook to fetch and return the product_id product

const useProduct = (productId: string | null): Product | null => {
	const [product, setProduct] = useState<Product | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			if (!productId) return;
			try {
				const response = await axios.post(
					backendUrl + "/api/product/fetchSingle",
					{
						id: productId,
					}
				);

				if (!response.data) {
					return toast.error(response.data.message);
				}

				setProduct(response.data.product);
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				console.error({ message });
				toast.error(message);
			}
		};

		fetchData();
	}, [productId]);

	return product;
};

export default useProduct;
