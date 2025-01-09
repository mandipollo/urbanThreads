import React from "react";
import { Product } from "../../types";
import ProductCard from "../cards/ProductCard";
interface FeaturedListProps {
	bestseller: Product[];
}

const FeaturedList: React.FC<FeaturedListProps> = ({ bestseller }) => {
	if (!bestseller) {
		return <p>Loading...</p>;
	}
	return (
		<section
			aria-labelledby="featured-heading"
			className="flex flex-col w-full py-10 md:gap-10 "
		>
			<h3 id="featured-heading" className="sr-only">
				list of our featured products
			</h3>
			<div className="max-w-prose mx-auto text-center mb-8 md:mb-12  ">
				<h3 className="text-xl mb-4 underline decoration-[#F06292] underline-offset-2">
					Featured products!
				</h3>
				<p className="font-light text-sm md:text-base">
					Step into our curated collection of standout products, chosen for
					their exceptional style, quality, and appeal. From trending must-haves
					to timeless essentials, these pieces are designed to elevate any
					occasion.
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-2 relative">
				<div className="w-full md:w-1/2 md:sticky top-0 left-0 h-screen">
					<figure className="h-full w-full aspect-square">
						<img
							src="/image/bestseller.webp"
							className=" object-cover h-full w-full"
						/>
					</figure>
				</div>

				<div className="w-full md:w-1/2">
					<ul
						aria-label="List of our featured products"
						className="grid grid-cols-2 gap-2 auto-rows-fr md:overflow-y-auto"
					>
						{bestseller.length
							? bestseller.map(product => (
									<ProductCard key={product._id} product={product} />
							  ))
							: Array.from({ length: 12 }).map((_, index) => (
									<li
										key={index}
										className="flex flex-col snap-always snap-start"
										role="presentation"
									>
										<div className="aspect-[3/4] w-full bg-gray-300 animate-pulse rounded"></div>
										<div className="mt-2 flex flex-col gap-1 px-2">
											<div className="w-3/4 h-4 bg-gray-300 animate-pulse rounded"></div>
											<div className="w-1/2 h-4 bg-gray-300 animate-pulse rounded"></div>
										</div>
									</li>
							  ))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default FeaturedList;
