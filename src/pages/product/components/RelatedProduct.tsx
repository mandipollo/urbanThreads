import React from "react";
import ProductCard from "../../../components/cards/ProductCard";

import useProductSubCategory from "../../../hooks/useProductSubCategory";
import { useLocation } from "react-router-dom";
import SkeletonCard from "../../../components/cards/SkeletonCard";

const RelatedProduct: React.FC<{
	subCategory: string;
	productId: string | undefined;
}> = ({ subCategory, productId }) => {
	// retrieve the category

	const url = useLocation().pathname;
	const category = url.split("/")[2];

	// fetch sub category products
	const relatedProducts = useProductSubCategory(category, subCategory) || [];

	// filter already shown products

	const filteredRelatedProducts = relatedProducts.filter(
		product => product._id !== productId
	);

	return (
		<section className="flex flex-col py-20 gap-8 px-2">
			<h5 className="pl-2">RELATED ITEMS</h5>
			<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-hidden  ">
				{filteredRelatedProducts ? (
					filteredRelatedProducts.map(product => (
						<ProductCard key={product._id} product={product} />
					))
				) : (
					<SkeletonCard cards={12} />
				)}
			</ul>
		</section>
	);
};

export default RelatedProduct;
