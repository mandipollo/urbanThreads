import React from "react";
import { Product } from "../../types/types";
import ProductCard from "../cards/ProductCard";
import { Link } from "react-router-dom";
interface ProductAllMenProps {
	filteredProducts: Product[];
}
const ProductAll: React.FC<ProductAllMenProps> = ({ filteredProducts }) => {
	return (
		<ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden w-full p-2">
			{filteredProducts.map(product => (
				<Link
					key={product._id}
					to={`/product/men/${product._id}`}
					state={`productId : ${product._id}`}
				>
					<ProductCard key={product._id} product={product} />
				</Link>
			))}
		</ul>
	);
};

export default ProductAll;
