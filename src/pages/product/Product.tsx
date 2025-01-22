import React, { useState } from "react";

// routes
import { useParams } from "react-router-dom";

// misc
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../../App";
import SkeletonCard from "../../components/cards/SkeletonCard";
import SkeletonProductInfo from "./components/SkeletonProductInfo";
// hooks
import useProduct from "./hooks/useProduct";
// components
import ProductImages from "./components/ProductImages";
import RelatedProduct from "./components/RelatedProduct";
import ProductInfo from "./components/ProductInfo";
import Meta from "../../components/shared/Meta";
// state

import { addProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Product as ProductType } from "../../types/types";
import { useAppSelector } from "../../store/store";

const Product: React.FC = () => {
	const sizes = ["S", "M", "L", "XL", "XXL"];
	const { productId } = useParams();
	const [size, setSize] = useState<string>("");

	// service fetch product data
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
				if (response.data.success) {
					dispatch(addProduct({ ...fetchedProduct, size }));
					toast("Product added to cart!");
				}
			} else {
				toast("Product already added to cart");
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			toast.error(message);
		}
	};

	return (
		<section aria-labelledby="product-heading" className="flex flex-col w-full">
			{fetchedProduct && (
				<Meta
					title={`Buy ${fetchedProduct.name} - Stylish & High-Quality`}
					description={fetchedProduct.description}
					keywords={`${fetchedProduct.name}, ${fetchedProduct.subCategory}, buy ${fetchedProduct.name}, stylish clothing, [Product Feature], add to cart, select size`}
				/>
			)}

			{fetchedProduct && (
				<h1 id="product-heading" className="sr-only">
					{fetchedProduct.name} - Product Details
				</h1>
			)}

			<div className="relative min-h-screen">
				<section className="grid grid-flow-row md:grid-cols-2 gap-4">
					{fetchedProduct ? (
						<div className="w-full">
							<ProductImages
								images={fetchedProduct.image}
								name={fetchedProduct.name}
							/>
						</div>
					) : (
						<div className="w-full flex flex-col">
							<SkeletonCard cards={2} />
						</div>
					)}
					{fetchedProduct ? (
						<ProductInfo
							productId={productId}
							size={size}
							sizes={sizes}
							setSize={setSize}
							handleAddProductToCart={handleAddProductToCart}
							fetchedProduct={fetchedProduct}
						/>
					) : (
						<SkeletonProductInfo />
					)}
				</section>
			</div>
			{fetchedProduct && (
				<RelatedProduct
					productId={productId}
					subCategory={fetchedProduct.subCategory}
				/>
			)}
		</section>
	);
};

export default Product;
