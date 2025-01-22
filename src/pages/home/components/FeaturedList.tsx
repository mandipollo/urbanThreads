import React from "react";
import { Product } from "../../../types/types";
import ProductCard from "../../../components/cards/ProductCard";
import SkeletonCard from "../../../components/cards/SkeletonCard";
interface FeaturedListProps {
	bestseller: Product[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({ bestseller }) => {
	return (
		<section
			aria-labelledby="featured-heading"
			className="flex flex-col w-full gap-2 "
		>
			<h3 id="featured-heading" className="sr-only">
				list of our featured products
			</h3>
			<div className="flex flex-col border m-2 bg-gradient-to-r to-[#CAAF82] via-[#BDBECE] from-[#BDC5CB]">
				<h3 className="text-xl p-2">Featured</h3>
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

				<div className="w-full md:w-1/2">
					<ul
						aria-label="List of our featured products"
						className="grid grid-cols-2 gap-2 auto-rows-fr md:overflow-y-auto"
					>
						{bestseller.length ? (
							bestseller.map(product => (
								<ProductCard key={product._id} product={product} />
							))
						) : (
							<SkeletonCard cards={12} />
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default FeaturedList;
