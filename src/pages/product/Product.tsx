import React, { useEffect, useState } from "react";

// routes
import { useParams } from "react-router-dom";

// misc
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../../App";

// hooks

// components
import ProductImages from "./components/ProductImages";
import RelatedProduct from "./components/RelatedProduct";
import ProductInfo from "./components/ProductInfo";
import Meta from "../../components/shared/Meta";
import SkeletonCard from "../../components/cards/SkeletonCard";
import SkeletonProductInfo from "./components/SkeletonProductInfo";
// state

import { addProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Product as ProductType } from "../../types/types";
import { useAppSelector } from "../../store/store";
import fetchProductService from "./service/fetchProductService";

const Product: React.FC = () => {
	const sizes = ["S", "M", "L", "XL", "XXL"];
	const { productId } = useParams();
	const [size, setSize] = useState<string>("");

	// service fetch product data

	const [product, setProduct] = useState<ProductType | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!productId) return;
			try {
				const response = await fetchProductService(productId);

				if (!response.data.success) {
					return toast.error(response.data.message);
				}

				setProduct(response.data.product);
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				toast.error(message);
			}
		};

		fetchData();
	}, [productId]);

	// check if product already exists in cartSlice ? notify user :  store product to cart

	const dispatch = useDispatch();
	const cartItemState = useAppSelector(state => state.cartReducer.items);
	const token = useAppSelector(state => state.tokenReducer.token);

	//add product id to user model
	const handleAddProductToCart = async (
		productId: string,
		size: string,
		product: ProductType
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
					dispatch(addProduct({ ...product, size }));
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
			{product && (
				<Meta
					title={`Buy ${product.name} - Stylish & High-Quality`}
					description={product.description}
					keywords={`${product.name}, ${product.subCategory}, buy ${product.name}, stylish clothing, [Product Feature], add to cart, select size`}
				/>
			)}

			{product && (
				<h1 id="product-heading" className="sr-only">
					{product.name} - Product Details
				</h1>
			)}

			<div className="relative min-h-screen">
				<section className="grid grid-flow-row md:grid-cols-2 gap-4">
					{product ? (
						<div className="w-full">
							<ProductImages images={product.image} name={product.name} />
						</div>
					) : (
						<div className="w-full flex flex-col">
							<SkeletonCard cards={2} />
						</div>
					)}
					{product ? (
						<ProductInfo
							productId={productId}
							size={size}
							sizes={sizes}
							setSize={setSize}
							handleAddProductToCart={handleAddProductToCart}
							product={product}
						/>
					) : (
						<SkeletonProductInfo />
					)}
				</section>
			</div>
			{product && (
				<RelatedProduct
					productId={productId}
					subCategory={product.subCategory}
				/>
			)}
		</section>
	);
};

export default Product;
