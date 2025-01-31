import React, { useEffect, useState } from "react";

// services

// shared components
import Category from "../../components/shared/Category";
import ProductAll from "../../components/shared/ProductAll";
import Meta from "../../components/shared/Meta";

import { toast } from "react-toastify";
import Pagination from "../../components/shared/Pagination";
import { Product } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import fetchProductsService from "../../services/fetchProductsService";
const WomenCollection: React.FC = () => {
	const [_, setSearchParams] = useSearchParams();
	const [subCategory, setSubCategory] = useState<string>("");

	//

	const [page, setPage] = useState<number>(0);

	const [products, setProducts] = useState<Product[]>([]);
	const [totalPages, setTotalPages] = useState<number>(1);

	// reset page to 0 whenever subcategory changes
	useEffect(() => {
		setPage(0);
	}, [subCategory]);

	// fetch products based on page and subcategory ,
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchProductsService({
					category: "Women",
					page,
					subCategory,
				});
				if (response.data.success) {
					const products = await response.data.product;
					setProducts(products);
					setTotalPages(response.data.totalPages);
				}
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				toast.error(message);
			}
		};
		fetchData();
	}, [page, subCategory]);

	// Update URL whenever the page changes
	useEffect(() => {
		setSearchParams({ filter: subCategory, page: page.toString() });
	}, [page, subCategory, setSearchParams]);
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

			<Pagination totalPages={totalPages} setPage={setPage} page={page} />
		</section>
	);
};

export default WomenCollection;
