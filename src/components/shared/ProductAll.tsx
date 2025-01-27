import React from "react";
import { Product } from "../../types/types";
import ProductCard from "../cards/ProductCard";
import SkeletonCard from "../cards/SkeletonCard";
interface ProductAllMenProps {
	products: Product[];
}
const ProductAll: React.FC<ProductAllMenProps> = ({ products }) => {
	return (
		<ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden w-full p-2">
			{products.length ? (
				products.map(product => (
					<ProductCard key={product._id} product={product} />
				))
			) : (
				<SkeletonCard cards={12} />
			)}
		</ul>
	);
};

export default ProductAll;
