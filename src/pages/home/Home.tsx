import { toast } from "react-toastify";
import ExploreMore from "./components/ExploreMore";
import FeaturedList from "./components/FeaturedList";
import Hero from "./components/Hero";

import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../../App";
import { Product } from "../../types/types";
import NewIn from "./components/NewIn";

const Home = () => {
	const [products, setProducts] = useState<Product[]>([]);

	const [bestSeller, setBestseller] = useState<Product[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(backendUrl + "/api/product/fetchAll");
				if (response.data.success) {
					const fetchedProducts: Product[] = response.data.products;

					setProducts(fetchedProducts.slice(0, 5));
					setBestseller(
						fetchedProducts.filter(product => product.bestseller !== false)
					);
				} else {
					toast.error(response.data.message);
				}
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
	return (
		<main className="flex flex-col justify-center items-center ">
			<Hero />
			<ExploreMore />
			<NewIn products={products} />
			<FeaturedList bestseller={bestSeller} />
		</main>
	);
};

export default Home;
