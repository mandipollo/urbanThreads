import React from "react";

// components
import Button from "../ui/Button";

// cart state

import { useAppSelector } from "../../store/store";
import CartProductsList from "../../pages/cart/components/CartProductsList";
import PriceSpan from "../ui/PriceSpan";
import { Link } from "react-router-dom";

const CartSummary: React.FC = () => {
	const cartState = useAppSelector(state => state.cartReducer);

	return (
		<div
			aria-label="Summary of cart items"
			role="dialog"
			className="fixed flex-col top-14 right-2 z-50 flex max-w-96 w-full space-y-2 bg-white p-4 shadow-md "
		>
			{cartState.items.length === 0 ? (
				<div className="flex flex-col">
					<p className="text-xl text-center">YOUR SHOPPING BAG IS EMPTY</p>
					<Button text="CONTINUE SHOPPING" />
				</div>
			) : (
				<div className="flex  flex-col w-full gap-10 ">
					<div
						aria-label="renders your products list "
						className="overflow-y-scroll max-h-[500px]"
					>
						<CartProductsList cartItems={cartState.items} />
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between">
							<p>ORDER VALUE</p>
							<PriceSpan price={cartState.total} />
						</div>
						<Link
							aria-label="Link to checkout page"
							className="border text-center p-2 bg-black text-white"
							to="/checkout"
						>
							CHECKOUT
						</Link>
						<Link
							aria-label="Link to shopping cart page"
							className="border text-center p-2 bg-white "
							to="/cart"
						>
							SHOPPING BAG
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartSummary;
