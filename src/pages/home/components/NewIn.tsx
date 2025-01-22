import React from "react";
import ProductCard from "../../../components/cards/ProductCard";
import SkeletonCard from "../../../components/cards/SkeletonCard";
interface NewInProps {
	products: {
		_id: string;
		name: string;
		description: string;
		price: number;
		sizes: string[];
		category: string;
		subCategory: string;
		date: Date;
		bestseller: boolean;
		image: string[];
	}[];
}

const NewIn: React.FC<NewInProps> = ({ products }) => {
	return (
		<section className="flex w-full flex-col p-2 gap-2 ">
			<div className="flex flex-col border bg-gradient-to-r to-[#CAAF82] via-[#BDBECE] from-[#BDC5CB]">
				<h3 className="text-xl p-2">New in</h3>
			</div>
			<div className="w-full overflow-hidden ">
				<ul
					aria-label="list of new products"
					className="grid grid-flow-col gap-2 auto-cols-[100%] md:auto-cols-[25%]  overflow-x-auto snap-x snap-mandatory scroll-smooth"
				>
					{products ? (
						products.map(product => (
							<ProductCard key={product._id} product={product} />
						))
					) : (
						<SkeletonCard cards={5} />
					)}
				</ul>
			</div>
		</section>
	);
};

export default NewIn;
