import React from "react";
import { Product } from "../../types/types";
import ProductCard from "../cards/ProductCard";
import SkeletonCard from "../cards/SkeletonCard";
interface ProductAllMenProps {
	filteredProducts: Product[];
}
const ProductAll: React.FC<ProductAllMenProps> = ({ filteredProducts }) => {
	return (
		<ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden w-full p-2">
			{filteredProducts.length ? (
				filteredProducts.map(product => (
					<ProductCard key={product._id} product={product} />
				))
			) : (
				<SkeletonCard cards={12} />
			)}
		</ul>
	);
};

export default ProductAll;
