import React, { useEffect, useState } from "react";

// services

import fetchProductAllByCategoryService from "../../services/fetchProductsService";

// shared components
import Category from "../../components/shared/Category";
import ProductAll from "../../components/shared/ProductAll";
import Meta from "../../components/shared/Meta";

import { toast } from "react-toastify";
import PaginationForm from "../../components/shared/PaginationForm";
import { Product } from "../../types/types";
const WomenCollection: React.FC = () => {
	const [subCategory, setSubCategory] = useState<string>("all");

	//

	const [page, setPage] = useState<number>(0);

	const [products, setProducts] = useState<Product[]>([]);
	const [totalPages, setTotalPages] = useState<number>(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchProductAllByCategoryService(
					"Women",
					page,
					subCategory
				);

				if (response.data.success) {
					const products = await response.data.product;
					setProducts(products);
					setTotalPages(response.data.totalPages);
				}
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				toast.error(message);
			}
		};
		fetchData();
	}, [page, subCategory]);

	return (
		<section
			aria-labelledby="men-collection-heading"
			className="flex flex-col w-full justify-center items-center "
		>
			<Meta
				title="Women`s Clothing Collection - Shop Stylish Fashion"
				description="Explore the latest trends in women`s clothing. From casual wear to elegant dresses, find the perfect outfit for any occasion."
				keywords="women's clothing, fashion, dresses, stylish outfits, casual wear, women's fashion collection"
			/>
			<h2 id="men-collection-heading" className="sr-only">
				browse latest womens products
			</h2>
			<Category
				category="Women"
				setSubCategory={setSubCategory}
				subCategory={subCategory}
			/>

			{products && <ProductAll products={products} />}

			<PaginationForm totalPages={totalPages} setPage={setPage} page={page} />
		</section>
	);
};

export default WomenCollection;
