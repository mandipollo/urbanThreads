import React, { SetStateAction } from "react";
import { Product } from "../../../types/types";

interface ProductSizeProps {
	setSize: React.Dispatch<SetStateAction<string>>;
	product: Product;
	productSize: string;
	size: string;
}

const ProductSizes: React.FC<ProductSizeProps> = ({
	setSize,
	product,
	productSize,
	size,
}) => {
	const isAvailable = product.sizes.includes(productSize);
	const isSelected = size === productSize;

	return (
		<button
			type="button"
			role="radio"
			aria-checked={isSelected}
			aria-disabled={!isAvailable}
			disabled={!isAvailable}
			onClick={() => setSize(productSize)}
			className={`
        relative flex justify-center items-center px-6 py-2 border
        ${
					isAvailable
						? "hover:border-black hover:bg-gray-100 "
						: "cursor-not-allowed text-gray-400"
				}
        ${isSelected ? "border-black" : "border-gray-300"}
      `}
		>
			<span className="relative">
				{productSize}
				{!isAvailable && (
					<span
						aria-hidden="true"
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block h-[1px] w-6 bg-gray-400 rotate-45"
					/>
				)}
			</span>
			<span className="sr-only">
				{isAvailable
					? `Size ${productSize}${isSelected ? " - Selected" : ""}`
					: `Size ${productSize} - Not available`}
			</span>
		</button>
	);
};

export default ProductSizes;
