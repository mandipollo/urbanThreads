import React, { useState } from "react";

// hooks
import useProductsCategory from "../../hooks/useProductsCategory";

// shared components
import ProductAll from "../../components/shared/ProductAll";
import Category from "../../components/shared/Category";
import Meta from "../../components/shared/Meta";

/////
const MenCollection: React.FC = () => {
	const [filter, setFilter] = useState<string>("");

	const productsMen = useProductsCategory("Men") || [];

	const filteredProducts =
		filter === ""
			? productsMen
			: productsMen.filter(product => product.subCategory === filter);
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
			<Category category="men" setFilter={setFilter} filter={filter} />

			{filteredProducts && <ProductAll filteredProducts={filteredProducts} />}
		</section>
	);
};

export default MenCollection;
