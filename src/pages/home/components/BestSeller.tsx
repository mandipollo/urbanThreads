import React, { useEffect, useState } from "react";
import { Product } from "../../../types/types";
import ProductCard from "../../../components/cards/ProductCard";
import SkeletonCard from "../../../components/cards/SkeletonCard";
import fetchBestsellerProducts from "../service/fetchBestsellerProducts";
import { toast } from "react-toastify";

const BestSeller: React.FC = () => {
	const [bestsellerProducts, setBestsellerProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchBestsellerProducts();
				if (response.data.success) {
					const fetchedProducts: Product[] = response.data.bestsellerProducts;
					setBestsellerProducts(fetchedProducts);
				}
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				toast.error(message);
			}
		};
		fetchData();
	}, []);
	return (
		<section
			aria-labelledby="featured-heading"
			className="flex flex-col w-full gap-2 "
		>
			<h3 id="featured-heading" className="sr-only">
				list of our featured products
			</h3>
			<div className="flex mx-2 justify-center items-center border bg-gradient-to-r from-[#CAAF82] via-[#BDBECE] to-[#BDC5CB]">
				<h3 className="text-xl p-2 text-white underline underline-offset-2 ">
					BESTSELLERS
				</h3>
			</div>
			<div className="flex flex-col md:flex-row gap-2 relative">
				<div className="w-full md:w-1/2 md:sticky top-14 left-0 h-screen">
					<figure className="h-full w-full aspect-square">
						<img
							alt="featured"
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548282/bestseller-1_xdc41r.webp"
							className=" object-cover h-full w-full"
						/>
					</figure>
				</div>

				<div className="w-full md:w-1/2 px-2 md:p-0 ">
					<ul
						aria-label="List of our featured products"
						className="grid grid-cols-2 gap-2 auto-rows-fr md:overflow-y-auto"
					>
						{bestsellerProducts.length ? (
							bestsellerProducts.map(product => (
								<ProductCard key={product._id} product={product} />
							))
						) : (
							<SkeletonCard cards={10} />
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default BestSeller;
