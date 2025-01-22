import React from "react";
import { Product } from "../../types/types";
import ProductCard from "../cards/ProductCard";
import { Link } from "react-router-dom";
import SkeletonCard from "../cards/SkeletonCard";
interface ProductAllMenProps {
	filteredProducts: Product[];
	category: "Women" | "Men";
}
const ProductAll: React.FC<ProductAllMenProps> = ({
	filteredProducts,
	category,
}) => {
	return (
		<ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden w-full p-2">
			{filteredProducts.length ? (
				filteredProducts.map(product => (
					<Link
						aria-label={`Link to product ${product.name} page`}
						key={product._id}
						to={`/product/${category}/${product._id}`}
						state={`productId : ${product._id}`}
					>
						<ProductCard key={product._id} product={product} />
					</Link>
				))
			) : (
				<SkeletonCard cards={12} />
			)}
		</ul>
	);
};

export default ProductAll;
