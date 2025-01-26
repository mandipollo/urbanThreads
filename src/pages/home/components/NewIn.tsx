import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/cards/ProductCard";
import SkeletonCard from "../../../components/cards/SkeletonCard";
import { Product } from "../../../types/types";
import fetchLatestproducts from "../service/fetchLatestproducts";
import { toast } from "react-toastify";

const NewIn: React.FC = () => {
	const [latestProducts, setLatestProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchLatestproducts();
				if (response.data.success) {
					const fetchedProducts: Product[] = response.data.latestProducts;
					setLatestProducts(fetchedProducts);
				}
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				toast.error(message);
			}
		};
		fetchData();
	}, []);
	return (
		<section className="flex w-full flex-col p-2 gap-2 ">
			<div className="flex flex-col border justify-center items-center  bg-gradient-to-r to-[#CAAF82] via-[#BDBECE] from-[#BDC5CB]">
				<h3 className="text-xl p-2 text-white underline underline-offset-2">
					NEW IN
				</h3>
			</div>
			<div className="w-full overflow-hidden">
				<ul className="grid grid-flow-col gap-2 auto-cols-[100%] md:auto-cols-[25%]  overflow-x-auto snap-x snap-mandatory scroll-smooth">
					{latestProducts.length ? (
						latestProducts.map(product => (
							<ProductCard key={product._id} product={product} />
						))
					) : (
						<SkeletonCard cards={4} />
					)}
				</ul>
			</div>
		</section>
	);
};

export default NewIn;
