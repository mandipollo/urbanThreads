import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ProductSizes from "../components/product/ProductSizes";
import ProductImages from "../components/product/ProductImages";
import RelatedProduct from "../components/product/RelatedProduct";
import useProduct from "../components/hooks/useProduct";

//

import { addProduct } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { CartProduct } from "../types";
import { useAppSelector } from "../store/store";
import { toast } from "react-toastify";

const Product: React.FC = () => {
	const sizes = ["S", "M", "L", "XL", "XXL"];
	const { productId } = useParams();
	const [size, setSize] = useState<string>("");
	const fetchedProduct = useProduct(productId || null);

	// if product - cartSlice ? notify user :  store product to cart

	const dispatch = useDispatch();
	const cartItemState = useAppSelector(state => state.cartReducer.items);
	const handleAddProductToCart = (product: CartProduct) => {
		const productExists = cartItemState.some(item => item._id === product._id);
		if (!productExists) {
			dispatch(addProduct(product));
			toast("Product added to cart!");
		} else {
			toast("Product already added to cart");
		}
	};

	if (!fetchedProduct) {
		return (
			<p role="status" aria-live="polite" className="text-center p-4">
				Loading product information...
			</p>
		);
	}
	return (
		<section className="flex flex-col w-full">
			<h1 className="sr-only">{fetchedProduct.name} - Product Details</h1>
			<div className="relative min-h-screen">
				<section className="grid grid-flow-row md:grid-cols-2 gap-4">
					<div className="w-full">
						<ProductImages
							images={fetchedProduct.image}
							name={fetchedProduct.name}
						/>
					</div>
					<div className="h-full">
						<div className="sticky top-4 flex flex-col p-2 md:p-10 gap-10">
							<div className="w-full justify-center items-center">
								<div>
									<h4 id="product-name">
										{fetchedProduct.name.toLocaleUpperCase()}
									</h4>
									<p role="definition" aria-label="Product price">
										{fetchedProduct.price}
									</p>
								</div>
							</div>
							<div
								aria-labelledby="size-heading"
								className="flex flex-col gap-10"
							>
								<h4 id="size-heading">SELECT SIZE: {size}</h4>
								<div className="grid grid-cols-5">
									{sizes.map(i => (
										<ProductSizes
											size={size}
											key={i}
											fetchedProduct={fetchedProduct}
											setSize={setSize}
											productSize={i}
										/>
									))}
								</div>

								<button
									onClick={() =>
										handleAddProductToCart({
											_id: fetchedProduct._id,
											name: fetchedProduct.name,
											description: fetchedProduct.description,
											price: fetchedProduct.price,
											category: fetchedProduct.category,
											subCategory: fetchedProduct.subCategory,
											size: size,
											image: fetchedProduct.image[0],
										})
									}
									disabled={size.length === 0}
									aria-label="Add to cart"
									type="button"
									className="hover:bg-[#343434] bg-black text-white w-full py-4 disabled:cursor-not-allowed "
								>
									ADD
								</button>
							</div>
							<div className="w-full gap-10 flex flex-col">
								<div
									aria-labelledby="description-heading"
									className="flex flex-col gap-2"
								>
									<h4 id="description-heading">DESCRIPTION</h4>
									<p
										role="definition"
										aria-label="Product description"
										className="text-sm"
									>
										{fetchedProduct.description}
									</p>
								</div>
								<div
									aria-labelledby="delivery-heading"
									className="flex flex-col gap-2"
								>
									<h4 id="delivery-heading">DELIVERY AND PAYMENT</h4>
									<p
										role="definition"
										aria-label="Delivery and payment details"
									>
										Free standard delivery for members when spending £30 or
										more. Click and Collect free for all. Free and flexible
										returns for members. We accept card payments via MasterCard
										and Visa. You can also pay by Klarna, PayPal, Apple Pay or
										use your giftcard. Find out more on our customer service
										pages.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<RelatedProduct
				productId={productId}
				subCategory={fetchedProduct.subCategory}
			/>
		</section>
	);
};

export default Product;
