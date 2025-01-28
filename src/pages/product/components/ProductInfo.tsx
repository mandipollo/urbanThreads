import React, { SetStateAction } from "react";
import ProductSizes from "./ProductSizes";
import { Product } from "../../../types/types";

interface ProductInfoProps {
	product: Product;
	sizes: string[];
	size: string;
	setSize: React.Dispatch<SetStateAction<string>>;
	productId: string | undefined;
	handleAddProductToCart: (
		productId: string,
		size: string,
		product: Product
	) => void;
}
const ProductInfo: React.FC<ProductInfoProps> = ({
	product,
	sizes,
	size,
	setSize,
	productId,
	handleAddProductToCart,
}) => {
	return (
		<div className="h-full">
			<div className="sticky top-4 flex flex-col p-2 md:p-10 gap-10">
				<div className="w-full justify-center items-center">
					<div>
						<h4 id="product-name">{product.name.toLocaleUpperCase()}</h4>
						<p role="definition">{product.price}</p>
					</div>
				</div>
				<div aria-labelledby="size-heading" className="flex flex-col gap-10">
					<h4 id="size-heading">SELECT SIZE: {size}</h4>
					<div className="grid grid-cols-5">
						{sizes.map(i => (
							<ProductSizes
								size={size}
								key={i}
								product={product}
								setSize={setSize}
								productSize={i}
							/>
						))}
					</div>
					{productId && (
						<button
							disabled={size.length === 0}
							onClick={() => handleAddProductToCart(productId, size, product)}
							aria-label="Add to cart"
							type="button"
							className="hover:bg-[#343434] bg-black text-white w-full py-4 disabled:cursor-not-allowed "
						>
							ADD
						</button>
					)}
				</div>
				<div className="w-full gap-10 flex flex-col">
					<div
						aria-labelledby="description-heading"
						className="flex flex-col gap-2"
					>
						<h4 id="description-heading">DESCRIPTION</h4>
						<p role="definition" className="text-sm">
							{product.description}
						</p>
					</div>
					<div
						aria-labelledby="delivery-heading"
						className="flex flex-col gap-2"
					>
						<h4 id="delivery-heading">DELIVERY AND PAYMENT</h4>
						<p role="definition" aria-label="Delivery and payment details">
							Free standard delivery for members when spending £30 or more.
							Click and Collect free for all. Free and flexible returns for
							members. We accept card payments via MasterCard and Visa. You can
							also pay by Klarna, PayPal, Apple Pay or use your giftcard. Find
							out more on our customer service pages.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
