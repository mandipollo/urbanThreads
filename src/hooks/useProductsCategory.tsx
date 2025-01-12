import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Product } from "../types/types";
import axios from "axios";
const useProductsCategory = (category: string): Product[] | null => {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.post(
					backendUrl + "/api/product/fetchCategory",
					{ category: category }
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
		fetchData();
	}, []);

	return products;
};

export default useProductsCategory;
