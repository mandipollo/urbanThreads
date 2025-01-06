import React from "react";
import { Product } from "../../types";
import CartSvg from "../icons/CartSvg";

interface ProductCard {
	product: Product;
	heightClasses: string;
}
const ProductCard: React.FC<ProductCard> = ({ product, heightClasses }) => {
	return (
		<li role="article" className="flex flex-col group snap-always snap-start ">
			<figure
				key={product._id}
				className={`overflow-hidden w-full group relative ${heightClasses} `}
			>
				<img
					loading="lazy"
					src={product.image[0]}
					alt={`primary image of ${product.name}`}
					className="object-cover h-full w-full absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out "
				/>
				<img
					aria-hidden="true"
					loading="lazy"
					src={product.image[1]}
					className="object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out "
				/>
			</figure>
			<div className="flex items-start justify-between gap-2 py-2">
				<div className="flex flex-col gap-1 pl-2">
					<p className="text-xs md:text-sm " aria-label={product.name}>
						{product.name}
					</p>
					<p
						className="text-xs md:text-sm"
						aria-label={`Price : ${product.price}`}
					>
						£{product.price}
					</p>
				</div>
				<button
					aria-label={`Add ${product.name} to cart`}
					className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 rounded-full p-2"
				>
					<figure className="h-4 w-4">
						<CartSvg color="white" />
					</figure>
				</button>
			</div>
		</li>
	);
};

export default ProductCard;
