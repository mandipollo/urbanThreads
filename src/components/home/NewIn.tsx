import React from "react";
import ProductCard from "../cards/ProductCard";

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
			<div className="flex flex-col py-6 md:py-8 ">
				<h3 className="text-xl">New in</h3>
			</div>
			<div className="w-full overflow-hidden ">
				<ul
					aria-label="list of new products"
					className="grid grid-flow-col gap-2 auto-cols-[100%] md:auto-cols-[25%]  overflow-x-auto snap-x snap-mandatory scroll-smooth"
				>
					{products.map(product => (
						<ProductCard
							key={product._id}
							product={product}
							heightClasses="aspect-[3/4]"
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default NewIn;
