import React from "react";
import ProductCard from "../cards/ProductCard";

import useProductSubCategory from "../hooks/useProductSubCategory";

interface RelatedProductProps {
	subCategory: string;
}
const RelatedProduct: React.FC<RelatedProductProps> = ({ subCategory }) => {
	const relatedProducts = useProductSubCategory(subCategory) || [];

	if (!relatedProducts) {
		return;
	}
	return (
		<section className="flex flex-col py-20 gap-8">
			<h1 className="pl-2">RELATED ITEMS</h1>
			<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden  ">
				{relatedProducts.map(product => (
					<ProductCard
						key={product._id}
						product={product}
						heightClasses="aspect-[3/4]"
					/>
				))}
			</ul>
		</section>
	);
};

export default RelatedProduct;
