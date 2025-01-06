import React, { useState } from "react";
import Category from "../components/collection.tsx/Category";
import ProductAll from "../components/collection.tsx/ProductAll";
import useProductsCategory from "../components/hooks/useProductsCategory";

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
			<h2 id="men-collection-heading" className="sr-only">
				browse latest womens products
			</h2>
			<Category category="women" setFilter={setFilter} filter={filter} />

			{filteredProducts && <ProductAll filteredProducts={filteredProducts} />}
		</section>
	);
};

export default WomenCollection;
