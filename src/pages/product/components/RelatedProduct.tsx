import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/cards/ProductCard";

import { useLocation } from "react-router-dom";
import SkeletonCard from "../../../components/cards/SkeletonCard";
import { toast } from "react-toastify";

import fetchProductsService from "../../../services/fetchProductsService";
import { Product } from "../../../types/types";
const RelatedProduct: React.FC<{
	subCategory: string;
	productId: string | undefined;
}> = ({ subCategory, productId }) => {
	// retrieve the category

	const url = useLocation().pathname;
	const category = url.split("/")[2] as "Women" | "Men";

	// fetch sub category products

	const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

	// fetch related products
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchProductsService({
					category,
					page: 0,
					subCategory,
				});

				if (response.data.success) {
					const products = await response.data.product;
					setRelatedProducts(products);
				}
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				toast.error(message);
			}
		};
		fetchData();
	}, [subCategory]);

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
