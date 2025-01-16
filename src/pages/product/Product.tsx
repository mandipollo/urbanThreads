import React, { useState } from "react";

// routes
import { useParams } from "react-router-dom";

// misc
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../../App";
// hooks
import useProduct from "./hooks/useProduct";
// components
import ProductSizes from "./components/ProductSizes";
import ProductImages from "./components/ProductImages";
import RelatedProduct from "./components/RelatedProduct";

// state

import { addProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Product as ProductType } from "../../types/types";
import { useAppSelector } from "../../store/store";

const Product: React.FC = () => {
	const sizes = ["S", "M", "L", "XL", "XXL"];
	const { productId } = useParams();
	const [size, setSize] = useState<string>("");
	const fetchedProduct = useProduct(productId || null);

	// check if product already exists in cartSlice ? notify user :  store product to cart

	const dispatch = useDispatch();
	const cartItemState = useAppSelector(state => state.cartReducer.items);

	const token = useAppSelector(state => state.tokenReducer.token);

	//add product id to user model
	const handleAddProductToCart = async (
		productId: string,
		size: string,
		fetchedProduct: ProductType
	) => {
		try {
			const productExists = cartItemState.some(item => item._id === productId);
			if (!productExists) {
				const response = await axios.post(
					backendUrl + "/api/user/addToCart",
					{
						productId,
						size,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				dispatch(addProduct({ ...fetchedProduct, size }));
				console.log(response);
				toast("Product added to cart!");
			} else {
				toast("Product already added to cart");
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			console.error({ message });
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
								{productId && (
									<button
										disabled={size.length === 0}
										onClick={() =>
											handleAddProductToCart(productId, size, fetchedProduct)
										}
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
