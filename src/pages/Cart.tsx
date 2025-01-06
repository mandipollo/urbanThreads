import React from "react";
import { useAppSelector } from "../store/store";
import Button from "../components/cards/Button";
import CartProducts from "../components/cart/CartProducts";

const Cart = () => {
	const cartItems = useAppSelector(state => state.cartReducer.items);
	console.log(cartItems);

	return (
		<section className="flex flex-col h-full w-full p-4 min-h-screen">
			<h2 className="text-6xl font-semibold pt-10 pb-16">SHOPPING BAG</h2>
			<div className="flex flex-row flex-1 relative">
				<div className="w-4/6">
					<CartProducts cartItems={cartItems} />
				</div>
				<div className="w-2/6 sticky top-0 right-0 ">
					<div className="flex flex-col space-y-2">
						<div className="flex w-full justify-between">
							<p>Order value</p>
							<p className="font-normal">£81</p>
						</div>
						<div className="flex w-full justify-between">
							<p>Delivery fee</p>
							<p className="font-normal">£3.99</p>
						</div>
						<div className="flex w-full justify-between text-lg">
							<p>TOTAL</p>
							<p className="font-normal">£85.78</p>
						</div>
						<Button text="CONTINUE TO CHECKOUT" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
