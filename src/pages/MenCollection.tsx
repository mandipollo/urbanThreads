import React, { useState } from "react";

import Category from "../components/collection.tsx/Category";
import ProductAll from "../components/collection.tsx/ProductAll";
import useProductsMen from "../components/hooks/useProductsCategory";

const MenCollection: React.FC = () => {
	const [filter, setFilter] = useState<string>("");

	const productsMen = useProductsMen("Men") || [];

	const filteredProducts =
		filter === ""
			? productsMen
			: productsMen.filter(product => product.subCategory === filter);
	return (
		<section
			aria-labelledby="men-collection-heading"
			className="flex flex-col w-full justify-center items-center "
		>
			<h2 id="men-collection-heading" className="sr-only">
				browse latest mens products
			</h2>
			<Category category="men" setFilter={setFilter} filter={filter} />

			{filteredProducts && <ProductAll filteredProducts={filteredProducts} />}
		</section>
	);
};

export default MenCollection;
