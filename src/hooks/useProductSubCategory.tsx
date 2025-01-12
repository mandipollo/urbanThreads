import { useState, useEffect } from "react";
import { Product } from "../types/types";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import axios from "axios";
const useProductSubCategory = (subCategory: string): Product[] => {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		const fetchSimiliarItems = async () => {
			try {
				const response = await axios.post(
					backendUrl + "/api/product/fetchSubCategory",
					{
						subCategory,
					}
				);

				if (!response.data.success) {
					return;
				}
				setProducts(response.data.product);
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				console.error({ message });
				toast.error(message);
			}
		};
		fetchSimiliarItems();
	}, [subCategory]);

	return products;
};

export default useProductSubCategory;
