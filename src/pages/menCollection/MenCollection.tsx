import React, { useEffect, useState } from "react";

// shared components
import ProductAll from "../../components/shared/ProductAll";
import Category from "../../components/shared/Category";
import Meta from "../../components/shared/Meta";
import Pagination from "../../components/shared/Pagination";
import { Product } from "../../types/types";

import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import fetchProductsService from "../../services/fetchProductsService";

/////
const MenCollection: React.FC = () => {
	const [_, setSearchParams] = useSearchParams();

	const [subCategory, setSubCategory] = useState<string>("");

	// fetch paginated all products at inital render

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
					category: "Men",
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
				title="Men`s Clothing Collection - Stylish Fashion for Men"
				description="Explore the latest trends in men's fashion. From casual wear to formal styles, find the perfect outfit for any occasion."
				keywords="men's clothing, men's fashion, casual wear, formal wear, stylish outfits, men's fashion collection, men's clothing trends"
			/>
			<h2 id="men-collection-heading" className="sr-only">
				browse latest mens products
			</h2>
			<Category
				category="Men"
				setSubCategory={setSubCategory}
				subCategory={subCategory}
			/>

			{products && <ProductAll products={products} />}
			<Pagination totalPages={totalPages} setPage={setPage} page={page} />
		</section>
	);
};

export default MenCollection;
