import React from "react";
import ProductCard from "../../../components/cards/ProductCard";

import useProductSubCategory from "../../../hooks/useProductSubCategory";

const RelatedProduct: React.FC<{
	subCategory: string;
	productId: string | undefined;
}> = ({ subCategory, productId }) => {
	// fetch sub category products
	const relatedProducts = useProductSubCategory(subCategory) || [];

	// filter already shown product

	const filteredRelatedProducts = relatedProducts.filter(
		product => product._id !== productId
	);
	if (!filteredRelatedProducts) {
		return;
	}
	return (
		<section className="flex flex-col py-20 gap-8">
			<h1 className="pl-2">RELATED ITEMS</h1>
			<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden  ">
				{filteredRelatedProducts.map(product => (
					<ProductCard key={product._id} product={product} />
				))}
			</ul>
		</section>
	);
};

export default RelatedProduct;
