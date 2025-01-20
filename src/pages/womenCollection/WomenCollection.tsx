import React, { useState } from "react";

// hooks

import useProductsCategory from "../../hooks/useProductsCategory";

// shared components
import Category from "../../components/shared/Category";
import ProductAll from "../../components/shared/ProductAll";
import Meta from "../../components/shared/Meta";
const WomenCollection: React.FC = () => {
	const [filter, setFilter] = useState<string>("");

	const productsWomen = useProductsCategory("Women") || [];

	const filteredProducts =
		filter === ""
			? productsWomen
			: productsWomen.filter(product => product.subCategory === filter);
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
			<Category category="women" setFilter={setFilter} filter={filter} />

			{filteredProducts && <ProductAll filteredProducts={filteredProducts} />}
		</section>
	);
};

export default WomenCollection;
