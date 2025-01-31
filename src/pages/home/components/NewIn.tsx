import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/cards/ProductCard";
import SkeletonCard from "../../../components/cards/SkeletonCard";
import { Product } from "../../../types/types";
import fetchLatestproducts from "../service/fetchLatestproducts";
import { toast } from "react-toastify";

// slider

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import SwiperNavButtons from "../../../components/shared/SwiperNavButtons";

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
				const message = error instanceof Error ? error.message : String(error);
				toast.error(message);
			}
		};
		fetchData();
	}, []);
	return (
		<section className="flex w-full flex-col p-2 gap-2 relative ">
			<div className="flex flex-col border justify-center items-center  bg-gradient-to-r to-[#CAAF82] via-[#BDBECE] from-[#BDC5CB]">
				<h3 className="text-xl p-2 text-white underline underline-offset-2">
					NEW IN
				</h3>
			</div>
			<div className="w-full relative overflow-hidden">
				{latestProducts.length ? (
					<Swiper
						breakpoints={{
							// Default configuration
							0: {
								slidesPerView: 2,
							},
							640: {
								slidesPerView: 4,
							},
							768: {
								slidesPerView: 6,
							},
						}}
						modules={[Navigation, A11y]}
						spaceBetween={8}
					>
						{latestProducts.map(product => (
							<SwiperSlide key={product._id}>
								<ProductCard key={product._id} product={product} />
							</SwiperSlide>
						))}
						<SwiperNavButtons />
					</Swiper>
				) : (
					<SkeletonCard cards={4} />
				)}
			</div>
		</section>
	);
};

export default NewIn;
