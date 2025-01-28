import React from "react";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";

interface ProductCard {
	product: Product;
}
const ProductCard: React.FC<ProductCard> = ({ product }) => {
	return (
		<li className="flex flex-col group snap-always snap-start ">
			<Link
				aria-label={`Link to product ${product.name} page`}
				key={product._id}
				to={`/product/${product.category}/${product._id}`}
				state={`productId : ${product._id}`}
			>
				<figure
					key={product._id}
					className={`overflow-hidden w-full group relative aspect-[3/4]`}
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
			</Link>
			<div className="flex flex-col gap-2 py-2">
				<p className="text-xs md:text-sm ">{product.name}</p>
				<p className="text-xs md:text-sm">£{product.price}</p>
			</div>
		</li>
	);
};

export default ProductCard;
